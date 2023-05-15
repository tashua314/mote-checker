import { Category } from '../types/survey'
import { GetterTree, MutationTree, ActionTree } from 'vuex'

export const state: RootState = {
  categories: [
    {
      name: 'Category 1',
      categoryIndex: 1,
      questions: [
        { questionIndex: 1, text: 'Question 1', rating: 0 },
        { questionIndex: 2, text: 'Question 2', rating: 0 },
        { questionIndex: 3, text: 'Question 3', rating: 0 },
      ],
    },
    // Add other categories here
  ],
}

interface RootState {
  categories: Category[]
}

export const mutations: MutationTree<RootState> = {
  /**
   * Updates the rating of multiple questions in a category
   * @param state The Vuex state
   * @param payload An array of objects containing the category index, question index, and rating
   * @example
   * // Updates the rating of the first question in the first category to 5
   * // and the rating of the second question in the first category to 4
   * updateMultipleRatings(state, [
   *  { categoryIndex: 0, questionIndex: 0, rating: 5 },
   * { categoryIndex: 0, questionIndex: 1, rating: 4 },
   * ])
   **/
  updateMultipleRatings(state, payload: { categoryIndex: number; questionIndex: number; rating: number }[]) {
  for (const { categoryIndex, questionIndex, rating } of payload) {
    const category = state.categories.find(item => item.categoryIndex === categoryIndex)
    if (category) {
      const question = category.questions.find(q => q.questionIndex === questionIndex)
      if (question) {
        question.rating = rating
      }
    }
  }
  },
}

export const getters: GetterTree<RootState, RootState> = {
  getCategories: (state) => state.categories,
}

export const actions: ActionTree<RootState, RootState> = {
  // Add any asynchronous actions here
}