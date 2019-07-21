<template>
    <div>
        <img :src="pic"/>
        <div><span v-for="i in timeCosts"> 耗时{{i}}ms ；</span></div>
        <div>
            请选择线程数
            <select v-model="workerNum" @change="changeNum(workerNum)">
                <option v-for="value in options" :value ="value">{{value}}</option>
            </select>
            <button type="button" @click="Download">下载!</button>
        </div>
    </div>
</template>

<script>
    let _imageEncode = ((arrayBuffer) => {
        let b64encoded = btoa([].reduce.call(new Uint8Array(arrayBuffer), function (p, c) {
            return p + String.fromCharCode(c)
        }, ''))
        let mimetype = "image/jpeg"
        return "data:" + mimetype + ";base64," + b64encoded
    })

    let createWorkers = ((workerNum) => {
        let worksList = Array.apply(null, Array(workerNum)).map(function(x, y) { return y+1});
        let workers =worksList.map((x)=> {
            return {message: 'message'+x,func: () => 'https://images.unsplash.com/photo-1455459182396-ae46100617cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=860&q=80'}
        })
        return workers
    })

    export default {
        name: "WebWorkers",
        data() {
            return {
                pic: '',
                timeCosts: [],
                myWorker: null,
                options: [8,7,6,5,4],
                workerNum: 4
            }
        },
        mounted() {
            let workers = createWorkers(this.workerNum)
            this.myWorker = this.$worker.create(workers)
        },
        methods: {
            changeNum(val){
                this.myWorker = null
                let workers = createWorkers(val)
                this.myWorker = this.$worker.create(workers)
            },
            Download() {
                this.myWorker.postAll()
                    .then(result => {
                        let beginTime = +new Date();
                        this.$axios.get(result, {
                            responseType: 'arraybuffer'
                        }).then((res) => {
                            console.log(res)
                            this.pic = _imageEncode(res.data)
                            let endTime = +new Date();
                            this.timeCosts.push((endTime - beginTime))
                        })
                    })
            }
        }
    }
</script>