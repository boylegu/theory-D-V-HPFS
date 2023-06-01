<template>
  <el-dialog
    :visible.sync="showConfigDialog"
    :show-close="false"
    :width="'40%'"
    :close-on-click-modal="false"
    :top="'2%'">
    <div>选择目标服务器
    </div>
    <el-transfer
      filterable
      filter-placeholder="请输入IP地址"
      v-model="SelectIps"
      style="margin-top: 12px"
      :filter-method="filterMethod"
      :data="data">
    </el-transfer>

    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="Submits">确 定</el-button>
      <el-button @click="cancelModal">取 消</el-button>
    </div>
  </el-dialog>

</template>

<script>
  export default {
    name: "ConfigDialog",
    props: ['showConfigDialog'],
    data() {
      const generateData = _ => {
        const data = [];
        const ips = ['192.168.199.170'];
        const pinyin = ips;
        ips.forEach((ip, index) => {
          data.push({
            label: ip,
            key: ip,
            pinyin: pinyin[index]
          });
        });
        return data;
      };
      return {
        data: generateData(),
        SelectIps: [],
      };
    },

    methods: {
      cancelModal() {
        this.$emit('syncConfigDialog', false);
      },
      filterMethod(query, item) {
        return item.pinyin.indexOf(query) > -1;
      },
      Submits() {
        this.$emit('syncSelectIps', this.SelectIps)
        this.$emit('syncConfigDialog', false);
      }
    }
  }
</script>

<style scoped>

</style>
