<template>
  <v-container class="background-image custom-padding-bottom" pt-10>
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
.background-image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: 100% auto;
  opacity: 0.2; /* 透明度を調整 */
}

.background-image {
  position: relative; /* 疑似要素の基準点として機能させる */
  width: 100%;
  height: 100%;
}
@media (max-width: 600px) {
  .background-image::before {
    background-image: url('~/assets/lovers-sp.png');
  }
}
@media (min-width: 601px) {
  .background-image::before {
    background-image: url('~/assets/lovers.png');
  }
}
.custom-padding-bottom {
  padding-bottom: 185px;
}
</style>
