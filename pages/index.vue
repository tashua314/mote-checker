<template>
  <div>
    <h1>Favorite Food</h1>
    <div v-if="true /*$auth.loggedIn*/">
      <p>Welcome, {{ /* $auth.user.name */ }}</p>
      <form @submit.prevent="submitForm">
        <label for="favoriteFood">Favorite Food:</label>
        <v-text-field id="favoriteFood" v-model="favoriteFood" required class="white--text"></v-text-field>
        <v-btn type="submit">Submit</v-btn>
      </form>
    </div>
    <div v-else>
      <p>Please <nuxt-link to="/login">login</nuxt-link> to continue.</p>
      <button @click="loginWithGoogle">Login with Google2</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  data() {
    return {
      favoriteFood: ''
    }
  },
  methods: {
    async loginWithGoogle() {
      try {
        // await this.$auth.loginWith('google');
      } catch (error) {
        console.error('Error logging in with Google:', error);
      }
    },
    /**
     * フォームを送信する
     */
    async submitForm() {
      const dateTime = new Date().toISOString()
      const userEmail = 'sample@sample.com' //this.$auth.user.email
      const userName = 'sample name' //this.$auth.user.name

      try {
        await this.writeToSheet(dateTime, userEmail, userName, this.favoriteFood)
        this.$router.push('/success')
      } catch (error) {
        console.error('Failed to write to sheet:', error)
      }
    },
    /**
     * 
     * @param {*} dateTime 
     * @param {*} userEmail 
     * @param {*} userName 
     * @param {*} favoriteFood 
     */
    async writeToSheet(dateTime: string, userEmail: string, userName: string, favoriteFood: string) {
      const accessToken = 'sample token' //this.$auth.strategy.token.get()

      const url = '/api/sheets'
      // const url = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.YOUR_SPREADSHEET_ID}/values/シート1!A:D:append?valueInputOption=RAW`
      const requestBody = {
        values: [dateTime, userEmail, userName, favoriteFood]
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
})
</script>