<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-layout align-center justify-center>
          <h1 class="display-2 font-weight-bold mb-3">Mote-Checker</h1>
        </v-layout>
        <v-layout align-center justify-center mb-10>
          <p class="subtitle-1">あなたのモテレベルをチェックしてみましょう！</p>
        </v-layout>
        <v-spacer size="3"></v-spacer>
        <v-layout align-center justify-center>
          <v-text-field v-model="checkee" label="お名前"></v-text-field>
        </v-layout>
        <v-layout align-center justify-center>
          <nuxt-link :to="{ path: '/survey', query: { checker, checkee } }">
            <v-btn color="primary" large dark rounded height="80">
              モテチェッカーを始める
            </v-btn>
          </nuxt-link>
        </v-layout>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  head: {
    title: 'Mote-Checker',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Mote-Checker'
      }
    ]
  },
  data() {
    return {
      checker: '', // チェックする人
      checkee: '', // チェックされる人
    }
  },
  methods: {
  }
})
</script>

<style scoped>
h1 {
  font-style: italic;
  font-family: "Roboto", sans-serif;
  color: #1976d2;
}

p {
  font-style: normal;
  font-family: "Roboto", sans-serif;
  color: #424242;
}
</style>
