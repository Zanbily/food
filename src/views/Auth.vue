<template>
  <div class="container login-container">
    <SignupForm class="form" />
  </div>
</template>
<script>
import SignupForm from '@/components/SignupForm.vue'
export default {
  name: 'Auth',
  components: {
    SignupForm
  }
}

</script>
<style lang="scss" scoped>
@import "@/scss/_variables.scss";

.login-container {
  max-width: 600px;
  height: 100vh;
  margin-top: -88px;
  display: flex;
  justify-content: center;
  align-items: center;
  .form {
    flex: 1;
  }
}
</style>
