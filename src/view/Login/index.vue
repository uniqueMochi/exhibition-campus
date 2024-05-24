<script setup>
import router from '@/router'
import { reactive, ref } from 'vue'

/* 获取登录表单对象 */
const loginFormRef = ref()

/* 登录表单 */
const loginFormData = ref({
  account: '22304030529',
  //   account: '',
  password: '112413'
  //   password: ''
})

const show = ref(true)
/* 该账号是否存储到本地 */
const memorization = ref(true)

// 校验规则
const loginRules = reactive({
  account: [{ required: true, message: '当前账号不能为空', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})

/* 登录 */
const login = async (formEl) => {
  await formEl.validate((valid) => {
    //     /* 是否符合校验规则 */
    if (!valid) return
    /* 登录逻辑 */
    router.push('/')
  })
}

/* 注册表单 */
const registerFormData = ref({
  //   account: '22304030529',
  account: '',
  //   pass: '112413',
  password: '',
  //   checkPass: '112413'
  checkPass: ''
})

/* 获取注册表单对象 */
const registerFormRef = ref()
const registerRules = reactive({
  account: [{ required: true, message: '当前账号不能为空', trigger: 'blur' }],
  pass: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  checkPass: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})
</script>

<template>
  <div class="box">
    <!-- 登录 -->
    <el-card style="width: 460px" class="login" v-if="show">
      <el-form
        :model="loginFormData"
        label-width="auto"
        ref="loginFormRef"
        :rules="loginRules"
      >
        <el-form-item>
          <h2 class="title">欢迎使用信息e展校园</h2>
        </el-form-item>
        <el-form-item label="账号" prop="account">
          <el-input v-model="loginFormData.account" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginFormData.password" type="password" />
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="memorization" label="记住账号" size="large" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" color="#1047f7" @click="login(loginFormRef)"
            >立即登录</el-button
          >
        </el-form-item>

        <el-form-item>
          没有账号?<span class="switch-btn" @click="show = !show">注册</span>
        </el-form-item>
      </el-form>
    </el-card>

    <!-- 注册 -->
    <el-card style="width: 460px" class="register" v-else>
      <el-form
        :model="registerFormData"
        label-width="auto"
        ref="registerFormRef"
        :rules="registerRules"
      >
        <el-form-item>
          <h2 class="title">账号注册</h2>
        </el-form-item>
        <el-form-item label="账号" prop="account">
          <el-input v-model="registerFormData.account" />
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input v-model="registerFormData.pass" type="password" />
        </el-form-item>
        <el-form-item label="密码确认" prop="checkPass">
          <el-input v-model="registerFormData.checkPass" type="password" />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            color="#1047f7"
            @click="login(registerFormRef)"
          >
            注册并登录
          </el-button>
        </el-form-item>

        <el-form-item>
          已经有了账户?<span class="switch-btn" @click="show = !show"
            >登录</span
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100vh;
  background: url('@/assets/wallhaven-x6jo5o.webp');
  background-size: 100%;
}

.el-card {
  position: absolute;
  top: 50%;
  /* 相对于容器顶部定位 */
  left: 50%;
  /* 相对于容器左边定位 */
  transform: translate(-50%, -50%);
  /* 相对于自身大小进行偏移，实现居中 */
}

:deep(.el-form) {
  .el-form-item {
    padding: 0 72px;

    .title {
      margin: 0 auto;
      color: #333333;
    }

    .el-button {
      width: 100%;
    }

    .switch-btn {
      margin-left: 20px;
      cursor: pointer;
      color: #1047f7;
    }
  }
}
</style>
