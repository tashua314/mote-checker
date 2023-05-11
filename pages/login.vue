<template>
  <div>
    <h1>Login</h1>
    <button @click="login">Login with Google</button>
    <button @click="loginWithGoogle">Login with Google2</button>
  </div>
</template>

<script>
export default {
  methods: {
    async loginWithGoogle() {
      try {
        await this.$auth.loginWith('google');
      } catch (error) {
        console.error('Error logging in with Google:', error);
      }
    },
    login() {
      this.$auth.loginWith('google')
    }
  }
}
</script>
