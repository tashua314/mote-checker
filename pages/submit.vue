<template>
  <div>
    <h1>好きな食べ物を入力してください</h1>
    <input v-model="favoriteFood" type="text" />
    <button @click="submit">確定</button>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from 'nuxt3'
import { google } from 'googleapis'

export default defineComponent({
  setup() {
    const favoriteFood = ref('')

    const submit = async () => {
      const userEmail = $auth.user.email
      const userName = $auth.user.name
      const dateTime = new Date().toISOString()

      try {
        await writeToSheet(dateTime, userEmail, userName, favoriteFood.value)
        $router.push('/success')
      } catch (error) {
        console.error('Failed to write to sheet:', error)
      }
    }

    return {
      favoriteFood,
      submit,
    }
  },
})

async function writeToSheet(dateTime, userEmail, userName, favoriteFood) {
  const jwtClient = new google.auth.JWT(
    process.env.GOOGLE_CLIENT_ID,
    null,
    process.env.GOOGLE_CLIENT_SECRET,
    ['https://www.googleapis.com/auth/spreadsheets']
  )

  await jwtClient.authorize()

  const sheets = google.sheets({ version: 'v4', auth: jwtClient })
  const spreadsheetId = 'YOUR_SPREADSHEET_ID'
  const range = 'Sheet1!A:D'

  const requestBody = {
    range,
    majorDimension: 'ROWS',
    values: [[dateTime, userEmail, userName, favoriteFood]],
  }

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: 'RAW',
    requestBody,
  })
}
