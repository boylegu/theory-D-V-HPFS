<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <!--HelloWorld msg="Welcome to Your Vue.js App"/ -->
        <nav>
            <router-link to='/helloworld'>HelloWorld</router-link>
            <router-link to='/opensource'>开源项目</router-link>
            <router-link to='/form'>表单</router-link>
            <router-link to='/web-workers'>WebWorkers</router-link>
        </nav>
        <router-view/>

        <div>
            使用vuex接收Form组件数据： {{fromFormWithStore}}
            是否最喜欢第二章节：{{isTwoFavour}}
        </div>
    </div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex'
    // import HelloWorld from './components/HelloWorld.vue'

    import dynamicVueModule from './utils/componentWithDynamicVuexModule'

    const name = 'form';

    export default {
        extends: dynamicVueModule(name),
        name: 'app',
        // components: {
        //   HelloWorld
        // },
        computed: {
            // ...mapState(['form']),
            ...mapState(name, {
                formData: state => state.formData
            }),
            ...mapGetters(name, ['isMostFavour']),
            fromFormWithStore() {
                // return this.$store.state.form.
                return this.formData
            },
            isTwoFavour() {
                // return this.$store.getters.isMostFavour;
                return this.isMostFavour
            }
        },
        mounted() {
            this.$root.$on('dataFromChild', (val) => {
                console.log('在App.vue中接收来自Form组件的消息:', val);
            })
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
