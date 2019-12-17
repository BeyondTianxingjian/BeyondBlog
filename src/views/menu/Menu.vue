<template>
  <div class="menu">
    <ul class="quick">
      <li>
        <router-link to="/user/hot">Beyond Blog</router-link>
      </li>
      <li>
        <router-link to="/user/about">About</router-link>
      </li>
    </ul>
    <br/>
    <ul>
      <li v-for="(item,index) in menuList">
        <a @click="toDetail(item.id)">{{item.name}}</a>
      </li>
    </ul>

    <ul class="my" v-if="!token">
      <li>
        <a @click="insertToken">Authenticate</a>
      </li>
      <token-dialog ref="tokenDialog"></token-dialog>
    </ul>
    <ul class="my" v-if="token">
      <li>
        <router-link to="/user/blog/add">Write Something</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import { mapGetters } from 'vuex'
  import GistApi from '@/api/gist'
  import TokenDialog from '@c/dialog/TokenDialog'

  export default {
    name: 'Menu',
    data () {
      return {
        menuList: []
      }
    },
    components: {
      TokenDialog
    },
    mounted () {
      GistApi.list({
        page: 1,
        pageSize: 100
      }).then((response) => {
        let result = response.data
        if (!result || result.length == 0) {
          this.menuList.push({
            name: '空空如也',
            id: ''
          })
          return
        }

        this.menuList.length = 0
        for (let i = 0; i < result.length; i++) {
          let current = result[i]
          if (i === 0) {
            this.$store.dispatch('SET_BLOG_ID', current.id)
          }
          for (let key in current.files) {
            this.menuList.push({
              name: key,
              id: current.id
            })
          }
        }
      })
    },
    methods: {
      toDetail (id) {
        this.$router.push({
          path: '/user/blog/detail/' + id,
        }).catch(err => {
          console.log('输出报错',err)
        })
      },
      insertToken () {
        // TokenDialog;
        this.$refs.tokenDialog.open()
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
