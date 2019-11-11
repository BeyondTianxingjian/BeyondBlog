<template>
    <div style="min-height: 600px">
        <el-card shadow="never" style="margin-bottom: 20px">
            <el-form ref="form" :model="form" label-width="80px" :rules="ruleValidate">
                <el-form-item label="标题" prop="title">
                    <el-input v-model="form.title"></el-input>
                </el-form-item>
                <el-form-item label="简要说明" prop="description">
                    <el-input v-model="form.description" type="textarea"></el-input>
                </el-form-item>
                <el-form-item label="博客正文" prop="content">
                    <mavon-editor @imgAdd="imgAdd" style="max-height: 500px" ref="md" v-model="form.content" :subfield="false" :toolbars="mavonEditorToolbars"
                    />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit" :loading="submitButton.loading" :disabled="submitButton.disabled">发表</el-button>
                    <el-button @click="$router.push('/user/blog/main')">返回</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <token-dialog ref="tokenDialog"></token-dialog>
    </div>
</template>
