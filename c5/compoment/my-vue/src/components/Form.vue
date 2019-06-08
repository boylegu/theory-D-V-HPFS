<template>
    <fieldset>
        <legend>对于本书的意见</legend>
        <form  v-on:submit.prevent="submitted">
          <input v-model="demoForm.message" placeholder="读者心声">
          请选择您最喜欢的章节：
          <select v-model="demoForm.favour">
             <option v-for="(item, index) in selectOptions" :value="item" :key="index" >{{item}}</option>
          </select>
          <button @click="submitted">提交</button>
        </form>
    </fieldset>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
    name: 'Form',
    props: {
        selectOptions:Array   // 支持String、Number、Boolean、Array、Object、Function、Promise
      },
    data() {
      return {
        demoForm: {
          message: '',
          favour: ''
        },
      }
  },
   methods: {
     ...mapMutations(['updateFormData']),
     ...mapActions(['postFormData']),
    submitted(){
        console.log(this.demoForm.message);
        this.$emit('dataFromChild', this.demoForm)
        this.$root.$emit('dataFromChild', this.demoForm)
        //this.$store.dispatch('postFormData', this.demoForm)
        this.postFormData(this.demoForm)
        //this.updateFormData({'name': '全栈论道'})
    },
  },
}
</script>

<style>

</style>

