<template>
  <div>
    ~~~~~{{doc}}~22222~~~
    <mavon-editor ref="md" @imgAdd="imgAdd" style="max-height: 500px" v-model="doc"></mavon-editor>
  </div>
</template>
<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

export default {
  name: 'Create11111',
  components: { mavonEditor },
  data () {
    return {
      doc: ''
    }
  },
  methods: {
    imgAdd (pos, file) {
      // 将图片的url写入正文
      this.$refs.md.$img2Url(pos, file.miniurl)
    }
  }
}
</script>
