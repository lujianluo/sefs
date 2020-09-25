<template>
    <div>
  <el-alert
   v-if="loggedIn"
    title="成功提示的文案"
    type="success"
    show-icon>
  </el-alert> 
  <el-alert
  v-else
    title="错误提示的文案"
    type="error"
    show-icon>
  </el-alert>
    </div>
</template>

<script>
export default {
    data(){
        return {
            loggedIn: false
        }
    }
}
</script>