<template>
  <div class="body">
    <div class="front">
      <section>
        <article>
          <header>
            <h2>{{blog.title}}</h2>
            <div class="time front">
              <span>created at:{{blog.createTime}}</span>
              <span style="padding-left: 30px">last update:{{blog.updateTime}}</span>
            </div>
          </header>
          <section>
            <div v-html="blog.content" class="markdown-body" style="padding-top: 20px"></div>
          </section>
          <br/>
        </article>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import GistApi from '@/api/gist'
import { mapGetters } from 'vuex'

export default {
  components: {},
  data () {
    return {
      hotId: '',
      loading: false,
      blog: {
        id: '',
        title: '',
        content: '',
        description: '',
        createTime: '',
        updateTime: ''
      }
    }
  },
  methods: {},
  mounted () {


    /*GistApi.list({
      page: 1,
      pageSize: 1
    }).then((response) => {
      let result = response.data
      if (!result || result.length == 0) {
        this.loading = false
        return
      }
      for (let key in result[0].files) {
        this.blog.id = result[0]['id']
        break
      }
      GistApi.single(this.blog.id).then((res) => {
        let result = res.data
        for (let key in result.files) {
          debugger;
          this.blog['title'] = key
          this.blog['content'] = this.$markdown(result.files[key]['content'])
          this.blog['description'] = result['description']
          this.blog['createTime'] = this.$util.utcToLocal(result['created_at'])
          this.blog['updateTime'] = this.$util.utcToLocal(result['updated_at'])
          break
        }
      }).then(() => this.loading = false)
    })

    */
  },
  computed: {
    ...mapGetters([
      'token'
    ])
  }
}
</script>

<style lang="less">
  @import "../hot/content.less";
</style>
