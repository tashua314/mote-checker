<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto mb-5" color="pink lighten-5">
          <v-card-title class="font-weight-bold">
            {{ checkee }}さんのモテレベルをチェック結果⭐
          </v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-title>総合：{{ totalScore }}点</v-card-title>
          <v-card-text>
            <radar-chart :chart-data="chartData"></radar-chart>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-text>
            結果はいかがでしたでしょうか？<br /><br />
            日々のコミュニケーションを改良改善の意識を持つか持たないかで、<br />
            今後の恋愛・コミュニケーションに大きな差が出てきます。<br /><br />

            シェアボタンでコピーしたURLをメモしておいて、定期チェックをぜひ実施してみてください⭐<br />
            過去の自分と比較して今の状況を精密に把握することで、ご自身のモテレベルの向上に役立てていただければ幸いです😊<br />
          </v-card-text>
          <v-card-actions class="justify-center">
            <a :href="officialLineURL"
              ><img
                src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
                alt="友だち追加"
                height="56"
                border="0"
            /></a>
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
  head: {
    title: 'モテチェッカー - 結果シェア',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'モテチェックの結果をシェア🌟',
      },
    ],
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
      return this.$route.query.scores
        .split(',')
        .map((score: string) => Number(score))
    },
    // 最大値の場合を100点として、モテレベルを算出
    totalScore() {
      const val =
        (100 * this.averageScores.reduce((a: number, b: number) => a + b)) /
        (this.averageScores.length * 5)
      return Math.round(val)
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
    },
  },
  mounted() {
    this.labels = this.categories.map((category: Category) => category.name)
  },
})
</script>
