<template>
  <v-container>
    <AnalysisInProgress v-if="loading" />
    <v-form v-else ref="form">
      <v-card class="mx-auto mb-5" color="pink lighten-5">
        <v-card-title class="font-weight-bold">
          {{ $route.query.checkee }}さんのモテレベルをチェックしよう！
        </v-card-title>
        <v-card-subtitle> 以下の質問に答えてください😊 </v-card-subtitle>
      </v-card>
      <div v-for="(category, categoryIndex) in categories" :key="categoryIndex">
        <div
          v-for="(question, questionIndex) in category.questions"
          :key="questionIndex"
        >
          <v-row>
            <v-col cols="12">
              <p>{{ question.text }}</p>
            </v-col>
            <v-col cols="12">
              <v-slider
                :value="getRating(categoryIndex, questionIndex)"
                min="1"
                max="5"
                thumb-label="always"
                @input="setRating(categoryIndex, questionIndex, $event)"
              ></v-slider>
            </v-col>
          </v-row>
        </div>
      </div>
      <v-btn color="primary" @click="submit">回答する</v-btn>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { mapGetters, mapMutations } from 'vuex'
import { Category } from '../types/survey'
import AnalysisInProgress from '../components/AnalysisInProgress.vue'

export default defineComponent({
  name: 'Survey',
  components: {
    AnalysisInProgress,
  },
  data() {
    return {
      updateData: [] as Category[],
      loading: false,
    }
  },
  head: {
    title: 'モテチェッカー - チェックする',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'モテチェッカーです。モテレベルをチェックしてみよう！',
      },
    ],
  },
  mounted: function () {
    // deepコピー
    this.updateData = JSON.parse(JSON.stringify(this.categories))
    this.updateChecker(this.$route.query.checker)
    this.updateCheckee(this.$route.query.checkee)
  },
  computed: {
    ...mapGetters(['getCategories']),
    categories() {
      return this.getCategories
    },
  },
  methods: {
    ...mapMutations([
      'updateMultipleRatings',
      'updateChecker',
      'updateCheckee',
    ]),
    getRating(categoryIndex, questionIndex) {
      const category = this.updateData.find(
        (item) => item.categoryIndex === categoryIndex
      )
      if (category) {
        const question = category.questions.find(
          (q) => q.questionIndex === questionIndex
        )
        if (question) {
          return question.rating
        }
      }
      return 0
    },
    setRating(categoryIndex, questionIndex, rating) {
      // 存在しないcategory, questionが指定されることはない
      const category = this.updateData.find(
        (item) => item.categoryIndex === categoryIndex
      )
      if (category) {
        const question = category.questions.find(
          (q) => q.questionIndex === questionIndex
        )
        if (question) {
          question.rating = rating
        }
      }
    },
    submit() {
      this.loading = true
      this.updateMultipleRatings(this.updateData)
      setTimeout(() => {
        this.$router.push('/results') // 3秒後にresultsページにリダイレクト
      }, 3000)
    },
  },
})
</script>
