<template>
  <v-container>
    <v-row>
        <v-col cols="12">
          <v-card class="mx-auto mb-5" color="pink lighten-5">
            <v-card-title class="font-weight-bold">
              モテレベルをチェック結果です💕
            </v-card-title>
            <v-card-text>
              <p class="mb-1">チェックした人</p>
              <p class="headline mb-4">{{ this.checker }}</p>
              <p class="mb-1">チェックされた人</p>
              <p class="headline mb-4">{{ this.checkee }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-title>結果</v-card-title>
          <v-card-text>
            <radar-chart :chartData="chartData"></radar-chart>
        </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-text>
            結果はいかがでしたか？<br>
            今後の恋愛に役立てていただければ幸いです😊<br>
            <br>
            また、こちらのモテチェッカーは3カテゴリーのみのチェックとなっております。<br>
            より詳しく（6カテゴリーで）チェックしたい方、<br>
            身近にチェックしてくれる人がいない方は、<br>
            ぜひ下記のLINE公式アカウントをご利用ください♫😊<br>
        </v-card-text>
          <v-card-actions class="justify-center">
            <a :href="officialLineURL"><img src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" alt="友だち追加" height="56" border="0"></a>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { mapState } from 'vuex'
import RadarChart from '../components/RadarChart.vue'
import { Category } from '../types/survey'

export default defineComponent({
  components: {
    RadarChart,
  },
  data() {
    return {
      officialLineURL: 'https://bit.ly/3LrZHea',
      shareURL: '',
      labels: [],
    }
  },
  computed: {
    ...mapState(['categories']),
    categories() {
      return this.$store.state.categories
    },
    checker() {
      // リクエストパラメータから取得
      return this.$route.query.checker as string
    },
    checkee() {
      return this.$route.query.checkee as string
    },
    averageScores() {
      return this.$route.query.scores.split(',').map((score: string) => Number(score))
    },
    chartData() {
      return {
        labels: this.labels,
        datasets: [
          {
            label: 'モテレベル',
            data: this.averageScores,
            fill: true,
            backgroundColor: 'rgba(233, 30, 99, 0.2)',
            borderColor: 'rgba(233, 30, 99, 1)',
            pointBackgroundColor: 'rgba(233, 30, 99, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(233, 30, 99, 1)',
          },
        ],
      }
    }
  },
  mounted() {
    this.labels = this.categories.map((category: Category) => category.name)
  },
})
</script>
