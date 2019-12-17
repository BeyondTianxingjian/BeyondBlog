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
    let id;
    if(this.$route.params.id){
      id = this.$route.params.id;
    }else if(this.firstBlogID){
      id = this.firstBlogID;
    }else{
      this.$router.push({
        path: '/user/hot/main'
      })
    }
    GistApi.single(id).then((res) => {
      let result = res.data
      for (let key in result.files) {
        this.blog['title'] = key
        this.blog['content'] = this.$markdown(result.files[key]['content'])
        this.blog['description'] = result['description']
        this.blog['createTime'] = this.$util.utcToLocal(result['created_at'])
        this.blog['updateTime'] = this.$util.utcToLocal(result['updated_at'])
        break
      }
    }).then(() => this.loading = false)
  },
  computed: {
    ...mapGetters([
      'token',
      'firstBlogID'
    ])
  }
}
</script>

<style lang="less">
  @import "../hot/content.less";
</style>
