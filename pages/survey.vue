<template>
  <v-container>
    <AnalysisInProgress v-if="loading" />
    <v-form ref="form" v-else>
      <div v-for="(category, categoryIndex) in categories" :key="categoryIndex">
        <div v-for="(question, questionIndex) in category.questions" :key="questionIndex">
          <v-slider
            :value="getRating(categoryIndex, questionIndex)"
            @input="setRating(categoryIndex, questionIndex, $event)"
            :label="question.text"
            min="1"
            max="5"
            thumb-label="always"
          ></v-slider>
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
  name: 'survey',
  components: {
    AnalysisInProgress
  },
  data() {
    return {
      updateData: [] as Category[],
      loading: false
    }
  },
  mounted: function () {
    // deepコピー
    this.updateData = JSON.parse(JSON.stringify(this.categories))
  },
  computed: {
    ...mapGetters(['getCategories']),
    categories() {
      return this.getCategories
    }
  },
  methods: {
    ...mapMutations(['updateMultipleRatings']),
    getRating(categoryIndex, questionIndex) {
      const category = this.updateData.find(item => item.categoryIndex === categoryIndex)
      if (category) {
        const question = category.questions.find(q => q.questionIndex === questionIndex)
        if (question) {
          return question.rating
        }
      }
      return 0
    },
    setRating(categoryIndex, questionIndex, rating) {
      // 存在しないcategory, questionが指定されることはない
      const category = this.updateData.find(item => item.categoryIndex === categoryIndex)
      if (category) {
        const question = category.questions.find(q => q.questionIndex === questionIndex)
        if (question) {
          question.rating = rating
        }
      }
    },
    submit() {
      this.loading = true
      this.updateMultipleRatings(this.updateData)
      setTimeout(() => {
        this.$router.push('/results'); // 3秒後にresultsページにリダイレクト
      }, 3000);
    }
  }
})
</script>
