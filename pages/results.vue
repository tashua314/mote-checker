<template>
  <v-container>
    <v-card>
      <v-card-title>結果</v-card-title>
      <v-card-text>
        <radar-chart :chartData="chartData"></radar-chart>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { mapState } from 'vuex'
import { defineComponent, useStore } from '@nuxtjs/composition-api'
import RadarChart from '../components/RadarChart.vue'
import { Category, Question } from '../types/survey'

export default defineComponent({
  components: {
    RadarChart,
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
            label: 'Results',
            data,
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
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
