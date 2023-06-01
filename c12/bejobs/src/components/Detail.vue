<template>
  <div>
    <el-menu
      :default-active="navbar"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">任务分发系统 —— BeJobs</el-menu-item>
    </el-menu>
    <el-row :gutter="24">
      <div style="margin-top: 15px;">
        <el-form ref="postForm" :model="postForm" :rules="rules" class="form-container">
          <el-col :span="16">
            <div class="grid-content bg-purple">
              <!-- 命令输入区域 -->
              <el-form-item prop="input">
                <el-input placeholder="请输入命令" v-model="postForm.input" class="input-with-select" required>
                </el-input>
              </el-form-item>
            </div>
            <div style="margin-top: 55px;">
              <!-- 进度条区域 -->
              <el-card class="box-card">
                <el-steps :active="TaskStep" :finish-status="TaskStepStatus">
                  <el-step title="未开始"></el-step>
                  <el-step title="进行中"></el-step>
                  <el-step title="已完成"></el-step>
                </el-steps>
              </el-card>
            </div>
          </el-col>

          <el-col :span="8">
            <!-- 选择目标服务器区域 -->
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <el-form-item prop="SelectIps">
                  <span>目标服务器</span>
                  <el-button style="float: right; padding: 3px 0" type="text" @click="openConfig" required>选择
                  </el-button>
                </el-form-item>
              </div>
              <div v-for="ip in postForm.SelectIps" :key="ip" class="text item">
                {{ip}}
              </div>
            </el-card>
          </el-col>

        </el-form>

      </div>
    </el-row>
    <el-row :gutter="24">
      <!--水平分割线 -->
      <div style="margin-top: 30px;background:linear-gradient(to left,#efefef,#b6b6b6,#efefef);height:1px;"></div>
    </el-row>

    <el-row :gutter="24">
      <el-tabs v-model="viewTab" type="card" style="margin-top: 30px">
        <el-tab-pane label="结果概览" name="">
          <el-row :gutter="24">
            <el-col :span="9">
              <el-col :span="8">成功数 ：0</el-col>
              <el-col :span="8">失败数 : 0</el-col>
            </el-col>

            <el-col :span="15">
              <el-button type="primary" @click="Run">执行</el-button>
            </el-col>
          </el-row>
          <el-row :gutter="24" style="margin-top: 15px">
            <el-col :span="9">
              <el-table
                :data="tableData"
                stripe
                style="width: 100%">
                <el-table-column
                  prop="ip"
                  label="IP"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="endDT"
                  label="结束时间"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="returnCode"
                  label="返回值">
                </el-table-column>
              </el-table>
            </el-col>
            <el-col :span="15">
              <div class="terminal">
                <!-- 结果实时输出 -->
                <pre><output v-html="outputLog">{{outputLog}}</output></pre>
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </el-row>
    <config-dialog :showConfigDialog="showConfigDialog" @syncConfigDialog="syncConfigDialog"
                   @syncSelectIps="syncSelectIps"></config-dialog>
  </div>
</template>

<script>

  import ConfigDialog from '@/components/ConfigDialog'

  import {createTaskAPI} from '@/api/tasks'

  const submitForm = {
    input: '',     // 用户输入的命令
    SelectIps: []  // 选择目标服务器列表
  };

  export default {
    name: "Detail",
    components: {
      ConfigDialog
    },
    data() {
      const validateFields = (rule, value, callback) => {
        if (value === '' || value.length === 0) {
          this.$message({
            message: rule.field + '为必传项',
            type: 'error'
          })

          callback(new Error(rule.field + '为必传项'))
        } else {
          callback()
        }
      }

      return {
        navbar: '1',
        viewTab: 0,
        tableData: [],
        postForm: Object.assign({}, submitForm),
        showConfigDialog: false,
        outputLog: '',
        TaskStep: 0,
        TaskStepStatus: 'success',
        websock: null,
        taskId: this.$route.params.id,
        rules: {
          input: [{validator: validateFields}],
          SelectIps: [{validator: validateFields}]
        },
      }
    },
    mounted() {
      this.initWebSocket();
    },
    methods: {
      openConfig() {
        this.showConfigDialog = true
      },
      syncConfigDialog(val) {
        this.showConfigDialog = val
      },
      syncSelectIps(val) {
        this.postForm.SelectIps = val
      },
      Run() {
        this.$refs.postForm.validate(valid => {
          if (valid) {
            this.TaskStep = 0
            this.TaskStepStatus = 'success'
            this.TaskStep += 1

            this.postForm["taskId"] = this.taskId;

            createTaskAPI(this.postForm).then((res) => {
              this.TaskStep += 1

            }).catch(error => {

            });
          }
        })
      },
      initWebSocket() { //初始化weosocket
        let url = "ws://127.0.0.1:10081/ws/task/";
        const wsuri = url + this.taskId;

        this.websock = new WebSocket(wsuri);
        this.websock.onmessage = this.websocketonmessage;
        this.websock.onopen = this.websocketonopen;
        this.websock.onerror = this.websocketonerror;
        this.websock.onclose = this.websocketclose;
      },
      websocketonopen() { //连接建立之后执行send方法发送数据
        this.outputLog = '建立连接成功.....\n'
        let actions = {"msg_type": "all"};
        this.websocketsend(JSON.stringify(actions));
      },
      websocketonerror() {//连接建立失败重连
        this.initWebSocket();
      },
      websocketsend(Data) { //数据发送
        this.websock.send(Data);
      },
      websocketclose(e) {  //关闭
        console.log('断开连接', e);
      },
      websocketonmessage(e) { //数据接收
        let redata = JSON.parse(e.data);
        this.outputLog += "=====> " + redata.host + "\n";
        this.outputLog += redata.output;
        this.outputLog += "\n" + "结束时间:" + redata.finished_datetime + "\n";
        this.TaskStep += 1
        if (redata.exitcode !==0 ){
          this.TaskStepStatus = "error"
        }
        this.tableData = [
          {
            'ip': redata.host,
            'returnCode': redata.exitcode,
            'endDT': redata.finished_datetime,
          }
        ]
      },
    }
  }
</script>

<style scoped>
  .terminal {
    background-color: black;
    background-image: radial-gradient(
      rgba(0, 0, 0, 1), black 120%
    );
    height: 45vh;
    margin: 0;
    overflow: auto;
    padding: 2rem;
    color: white;
    font: 1.8rem Inconsolata, monospace;
    text-shadow: 0 0 5px #C8C8C8;
  }

</style>
