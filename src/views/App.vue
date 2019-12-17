<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script lang="ts">
import { mapGetters } from 'vuex'
import Menu from '@v/home/Home'

export default {
  name: 'App',
  computed: {
    ...mapGetters([
      'githubUsername',
      'htmlTitle'
    ])
  },
  created () {
    this.$store.dispatch('Init')
  },
  components: {
    Menu
  }
}
</script>
<style lang="less">
  @import "Main.less";
</style>
