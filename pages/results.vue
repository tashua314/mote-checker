<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto mb-5" color="blue lighten-5">
          <v-card-title class="font-weight-bold">
            モテレベルチェック結果⭐
          </v-card-title>
          <v-card-text>
            <p class="headline mb-4">{{ checkee }}さんのチェック結果</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-title>総合：{{ totalScore }}点</v-card-title>
          <v-card-text>
            <radar-chart :chart-data="chartData"></radar-chart>
            <!-- シェアURLをコピーするボタン -->
            <v-btn color="primary" @click="copyShareURL">
              結果をシェアする
            </v-btn>
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
import { mapState } from 'vuex'
import { defineComponent } from '@nuxtjs/composition-api'
import RadarChart from '../components/RadarChart.vue'
import { Category, Question } from '../types/survey'

export default defineComponent({
  components: {
    RadarChart,
  },
  data() {
    return {
      officialLineURL: 'https://bit.ly/3LrZHea',
      shareURL: '',
      averageScores: [],
      labels: [],
    }
  },
  head: {
    title: 'モテチェッカー - チェック結果',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'モテチェックの結果です',
      },
    ],
  },
  computed: {
    ...mapState({
      categories: (state) => state.categories,
      checker: (state) => state.checker,
      checkee: (state) => state.checkee,
    }),
    // 最大値の場合を100点として、モテレベルを算出
    totalScore() {
      if (this.averageScores.length > 0) {
        const val =
          (100 * this.averageScores.reduce((a: number, b: number) => a + b)) /
          (this.averageScores.length * 5)
        return Math.round(val)
      } else {
        return ''
      }
    },
    // TODO: mapGettersがなぜか動かない
    // ...mapGetters(['getChecker, getCheckee', 'getCategories']),
    // checker() {
    //   return this.getChecker
    // },
    // checkee() {
    //   return this.getCheckee
    // },
    // categories() {
    //   return this.getCategories
    // },
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
    this.averageScores = this.categories.map(
      (category: Category) =>
        category.questions.reduce(
          (total: number, question: Question) => total + question.rating,
          0
        ) / category.questions.length
    )
    this.shareURL = `${window.location.origin}/share?checkee=${
      this.checkee
    }&scores=${this.averageScores.join(',')}`
    this.writeToSheet()
  },
  methods: {
    copyShareURL() {
      const message = `モテレベルチェックしてみました！😊\n${this.shareURL}`
      navigator.clipboard.writeText(message).then(
        () => {
          // 成功した場合の処理
          this.$toasted.success(
            'リンクをコピーしました！<br>SNSで結果をシェアしちゃいましょう😊'
          )
        },
        () => {
          // 失敗した場合の処理
          this.$toasted.error(
            'リンクのコピーに失敗しました。<br>再度お試しください。'
          )
        }
      )
    },
    async writeToSheet() {
      const dateTime = new Date().toISOString()
      const accessToken = 'sample token' // this.$auth.strategy.token.get()

      const url = '/api/sheets'
      // const url = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.YOUR_SPREADSHEET_ID}/values/シート1!A:D:append?valueInputOption=RAW`
      const requestBody = {
        // averageScoresの配列を結合する
        values: [dateTime, this.checker, this.checkee].concat(
          this.averageScores
        ),
      }
      const headers = {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      }

      try {
        await this.$axios.$post(url, requestBody, { headers })
      } catch (error) {
        console.error('Failed to write to sheet:', error)
        throw error
      }
    },
  },
})
</script>
