import { Category } from '../types/survey'
import { GetterTree, MutationTree, ActionTree } from 'vuex'

export const state: RootState = {
  categories: [
    {
      name: '外見・印象',
      categoryIndex: 0,
      questions: [
        { questionIndex: 0, text: '彼の髪型や髭は整っていましたか？', rating: 0 },
        { questionIndex: 1, text: '彼の体臭や口臭は気になりませんでしたか？', rating: 0 },
        { questionIndex: 2, text: '彼の服装はデートに適したものでしたか？', rating: 0 },
        { questionIndex: 3, text: '彼のアクセサリーや持ち物は好印象でしたか？', rating: 0 },
        { questionIndex: 4, text: '彼の話し方や声のトーンは好感が持てましたか？', rating: 0 },
        { questionIndex: 5, text: '表情は好印象でしたか？', rating: 0 },
      ],
    },
    {
      name: 'コミュニケーション能力',
      categoryIndex: 1,
      questions: [
        { questionIndex: 0, text: 'メッセージでの会話は自然で楽しかったと感じましたか？', rating: 0 },
        { questionIndex: 1, text: 'メッセージでの質問や意見は自然でしたか？', rating: 0 },
        { questionIndex: 2, text: 'あなたのメッセージへの反応・返答は心地よかったですか？', rating: 0 },
        { questionIndex: 3, text: 'メッセージでの会話を盛り上げる努力をしていたと感じましたか？', rating: 0 },
        { questionIndex: 4, text: 'お会いした時の会話が自然で楽しかったと感じましたか？', rating: 0 },
        { questionIndex: 5, text: 'あなたに対してリスペクトを持って接してくれたと感じましたか？', rating: 0 },
        { questionIndex: 6, text: 'あなたの話をきちんと聞いてくれていたと感じましたか？', rating: 0 },
      ],
    },
    {
      name: '配慮・気遣い',
      categoryIndex: 2,
      questions: [
        { questionIndex: 0, text: 'あなたの話をきちんと聞いてくれたと感じましたか？', rating: 0 },
        { questionIndex: 1, text: 'お会いする場所や時間について、あなたの都合を考慮してくれましたか？', rating: 0 },
        { questionIndex: 2, text: 'あなたが特定の食物アレルギーや食事制限を持っている場合、それに配慮してレストランを選んでくれましたか？', rating: 0 },
        { questionIndex: 3, text: 'お会いした際に、あなたが快適に過ごせるような気温や天候について考慮してくれましたか？', rating: 0 },
        { questionIndex: 4, text: '会話の中であなたが話したいと感じるテーマにシフトしてくれましたか？', rating: 0 },
        { questionIndex: 5, text: 'あなたの好みや興味に合わせてアクティビティを提案してくれましたか？', rating: 0 },
      ],
    },
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
   **/
  updateMultipleRatings(state, payload: Category[]) {
    state.categories = payload
  },
}

export const getters: GetterTree<RootState, RootState> = {
  getCategories: (state) => state.categories,
}

export const actions: ActionTree<RootState, RootState> = {
  // Add any asynchronous actions here
}