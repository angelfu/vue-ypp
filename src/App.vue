<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="isKeep"></router-view>
    </keep-alive>
    <router-view v-if="!isKeep"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      keepPage: ['join', 'help']
    }
  },
  computed: {
    isKeep () {
      let self = this
      return self.keepPage.some(item => item === self.$route.name)
    }
  }
}
</script>

<style>

</style>
