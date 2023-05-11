<template>
  <div>
    <h1>Favorite Food</h1>
    <div v-if="$auth.loggedIn">
      <p>Welcome, {{ $auth.user.name }}</p>
      <form @submit.prevent="submitForm">
        <label for="favoriteFood">Favorite Food:</label>
        <input id="favoriteFood" v-model="favoriteFood" required />
        <button type="submit">Submit</button>
      </form>
    </div>
    <div v-else>
      <p>Please <nuxt-link to="/login">login</nuxt-link> to continue.</p>
      <button @click="loginWithGoogle">Login with Google2</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      favoriteFood: ''
    }
  },
  methods: {
    async loginWithGoogle() {
      try {
        await this.$auth.loginWith('google');
      } catch (error) {
        console.error('Error logging in with Google:', error);
      }
    },
    async submitForm() {
      const dateTime = new Date().toISOString()
      const userEmail = this.$auth.user.email
      const userName = this.$auth.user.name

      try {
        await this.writeToSheet(dateTime, userEmail, userName, this.favoriteFood)
        this.$router.push('/success')
      } catch (error) {
        console.error('Failed to write to sheet:', error)
      }
    },
    async writeToSheet(dateTime, userEmail, userName, favoriteFood) {
      const accessToken = this.$auth.strategy.token.get()

      const url = `https://sheets.googleapis.com/v4/spreadsheets/YOUR_SPREADSHEET_ID/values/Sheet1!A:D:append?valueInputOption=RAW`
      const requestBody = {
        values: [[dateTime, userEmail, userName, favoriteFood]]
      }
      const headers = {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }

      try {
        await this.$axios.$post(url, requestBody, { headers })
      } catch (error) {
        console.error('Failed to write to sheet:', error)
        throw error
      }
    }
  }
}
</script>
