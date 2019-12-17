<template>
  <div style="min-height: 600px">
    <el-card shadow="never" style="margin-bottom: 20px">
      <el-form ref="form" :model="form" label-width="100px" :rules="ruleValidate">
        <el-form-item label="标题" prop="title">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="简要说明" prop="description">
          <el-input v-model="form.description" type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="博客正文" prop="content">
          <mavon-editor @imgAdd="imgAdd" style="max-height: 500px" ref="md" v-model="form.content"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" :loading="submitButton.loading" :disabled="submitButton.disabled">发表</el-button>
          <el-button @click="$router.push('/user/blog/main')">返回</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts">
import GistApi from '@/api/gist'
import { mapGetters } from 'vuex'

export default {
  name: 'BlogList',
  components: { },
  data () {
    return {
      form: {
        title: '',
        description: '',
        content: ''
      },
      ruleValidate: {
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' },
          { type: 'string', max: 32, message: '标题长度不大于32字符', trigger: 'change' }
        ],
        description: [
          { required: true, message: '请输入博客描述', trigger: 'blur' }
        ],
        content: [
          { required: true, message: '请输博客入正文', trigger: 'blur' }
        ]
      },
      submitButton: {
        loading: false,
        disabled: false
      }
    }
  },
  methods: {
    imgAdd (pos, file) {
      this.$refs.md.$img2Url(pos, file.miniurl)
    },
    onSubmit () {
      if (!this.token) {
        this.$message({
          message: 'Token失效',
          type: 'fail'
        })
      } else {
        this.$refs['form'].validate((valid) => {
          if (valid) {
            this.submitButton.loading = true
            this.submitButton.disabled = true
            GistApi.create(this.form).then((response) => {
              let result = response.data
              // console.log(JSON.stringify(result))
              this.$message({
                message: '发表成功',
                type: 'success'
              })
              this.$router.push('/user/blog/details/' + result.id)
            }).then(() => {
              this.submitButton.loading = false
              this.submitButton.disabled = false
            })
          }
        })
      }
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
  @import "../hot/content.less";
</style>
