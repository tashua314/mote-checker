<template>
  <v-container>
    <v-form ref="form">
      <div v-for="(category, categoryIndex) in categories" :key="categoryIndex">
        <v-subheader>{{ category.name }}</v-subheader>
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

export default defineComponent({
  name: 'survey',
  data() {
    return {
      updateData: [] as Category[]
    }
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
      const category = this.updateData.find(item => item.categoryIndex === categoryIndex)
      if (category) {
        const question = category.questions.find(q => q.questionIndex === questionIndex)
        if (question) {
          question.rating = rating
        }
      }
    },
    submit() {
      this.updateMultipleRatings([{categoryIndex: 1, questionIndex: 1, rating: 1}])
      // this.updateCategoryRating(this.updateData)
      this.$router.push('/results')
    }
  }
})
</script>
