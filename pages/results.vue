<template>
  <v-container>
    <v-row>
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
      officialLineURL: 'https://bit.ly/3LrZHea'
    }
  },
  computed: {
    ...mapState({
      categories: state => state.categories,
    }),
    chartData() {
      const labels = this.categories.map((category: Category) => category.name)
      const data = this.categories.map((category: Category) =>
        category.questions.reduce((total: number, question: Question) => total + question.rating, 0) / category.questions.length
      )

      return {
        labels,
        datasets: [
          {
            label: 'モテレベル',
            data,
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
  // setup() {
  //   const chartData = (store) => {
  //     const categories: Category[] = store.state.categories
  //     const labels = categories.map((category: Category) => category.name)
  //     const data = categories.map((category: Category) =>
  //       category.questions.reduce((total: number, question: Question) => total + question.rating, 0) / category.questions.length
  //     )

  //     return {
  //       labels,
  //       datasets: [
  //         {
  //           label: 'Results',
  //           data,
  //           backgroundColor: 'rgba(179,181,198,0.2)',
  //           borderColor: 'rgba(179,181,198,1)',
  //           pointBackgroundColor: 'rgba(179,181,198,1)',
  //           pointBorderColor: '#fff',
  //           pointHoverBackgroundColor: '#fff',
  //           pointHoverBorderColor: 'rgba(179,181,198,1)',
  //         },
  //       ],
  //     }
  //   }
  //   return {
  //     chartData,
  //   }
  // }
})
</script>
