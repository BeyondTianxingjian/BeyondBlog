<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script lang="ts">
import { mapGetters } from 'vuex'

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
  }
}
</script>
<style lang="less">
  @import "Main.less";
</style>
