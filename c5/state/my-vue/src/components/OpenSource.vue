<template>
    <div>
      <img v-bind:src="img"/>
    </div>
</template>

<script>
export default {
    name: 'OpenSource',
    data() {
      return {
         img:'https://github.com/boylegu/SpringBoot-vue/raw/master/images/newlogo.jpg',
      }
  },
}
</script>
