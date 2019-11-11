<template>
  <div class="menu">
    <ul class="quick">
      <li>
        <a href="//pvdz.ee/weblog">Weblog</a>
      </li>
      <li>
        <a href="//pvdz.ee/notes">Notes</a>
      </li>
      <li>
        <a href="//pvdz.ee/projects">Projects</a>
      </li>
      <li>
        <a href="//pvdz.ee/about">About</a>
      </li>
    </ul>
    <br/>
    <ul>
      <li>
        <a href="//pvdz.ee/weblog/428">Pack token types in 32bit</a>
      </li>
      <li>
        <a href="//pvdz.ee/weblog/426">Xcode my js1k demo</a>
      </li>
    </ul>

    <ul class="my" v-if="!token">
      <li>
        <a @click="insertToken">Authenticate</a>
      </li>
    </ul>
    <ul class="my" v-if="token">
      <li>
        <a href="//pvdz.ee/weblog/428">My Home</a>
      </li>
      <li>
        <a href="//pvdz.ee/weblog/426">Write Something</a>
      </li>
    </ul>
    <token-dialog ref="tokenDialog"></token-dialog>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'
import TokenDialog from '@c/dialog/TokenDialog.vue'

export default {
  name: 'Menu',
  components: {
    TokenDialog
  },
  methods: {
    isLogin () {
      return false
    },
    insertToken() {
      // TokenDialog;
      this.$ref.tokenDialog.open()
    }
  },
  computed: {
    ...mapGetters([
      'token'
    ])
  }
}
</script>
<style lang="less">
  @import "menu.less";
</style>
