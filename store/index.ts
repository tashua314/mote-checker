import { Category } from '../types/survey'
import { GetterTree, MutationTree, ActionTree } from 'vuex'

export const state: RootState = {
  categories: [
    {
      name: 'セルフマネージメント',
      categoryIndex: 0,
      questions: [
        { questionIndex: 0, text: '目標を立て、それに向けて計画的に行動していますか？', rating: 0 },
        { questionIndex: 1, text: 'ストレスを感じた時の対処を効果的に行えていますか？', rating: 0 },
        { questionIndex: 2, text: '日々の時間を効率的に管理していますか？', rating: 0 },
        { questionIndex: 3, text: '健康的な生活習慣を維持していますか？', rating: 0 },
        { questionIndex: 4, text: '定期的に自己反省を行い、改善していますか？', rating: 0 },
        { questionIndex: 5, text: '感情のコントロールが上手ですか？', rating: 0 },
        { questionIndex: 6, text: '長所と短所を自覚していますか？', rating: 0 },
        { questionIndex: 7, text: '物事を成し遂げる自信がありますか？', rating: 0 },
        { questionIndex: 8, text: '決断を迅速かつ効果的に行えますか？', rating: 0 },
        { questionIndex: 9, text: '課題に直面した際に柔軟に対応できていますか？', rating: 0 }
      ],
    },
    {
      name: "情熱",
      categoryIndex: 1,
      questions: [
        { questionIndex: 0, text: '新しいことへの好奇心が強いですか？', rating: 0 },
        { questionIndex: 1, text: '何かに打ち込んだ経験がありますか？', rating: 0 },
        { questionIndex: 2, text: '夢中になれる趣味や活動がありますか？', rating: 0 },
        { questionIndex: 3, text: '他人を鼓舞できていますか？', rating: 0 },
        { questionIndex: 4, text: '目標に向かって情熱的に取り組むことができていますか？', rating: 0 },
        { questionIndex: 5, text: '自分の情熱を言葉で表現できていますか？', rating: 0 },
        { questionIndex: 6, text: '長期的な目標に情熱を持ち続けることができていますか？', rating: 0 },
        { questionIndex: 7, text: '挫折に直面しても情熱を保つことができていますか？', rating: 0 },
        { questionIndex: 8, text: '他人の情熱に共感し、支援することができていますか？', rating: 0 },
        { questionIndex: 9, text: '情熱を持っていることが、他人にも伝わりますか？', rating: 0 }
      ],
    },
    {
      name: '印象力',
      categoryIndex: 2,
      questions: [
        { questionIndex: 0, text: '初対面の人に良い印象を与えることができていますか？', rating: 0 },
        { questionIndex: 1, text: '自分の服装や外見に気を使い、清潔感を保てていますか？', rating: 0 },
        { questionIndex: 2, text: '表情を通じて良い印象を与えられますか？', rating: 0 },
        { questionIndex: 3, text: '礼儀正しく振る舞うことができていますか？', rating: 0 },
        { questionIndex: 4, text: '印象的な自己紹介ができていますか？', rating: 0 },
        { questionIndex: 5, text: '人の名前を覚えることができていますか？', rating: 0 },
        { questionIndex: 6, text: '積極的な態度で人に接することができていますか？', rating: 0 },
        { questionIndex: 7, text: '人と目を合わせて話すことができていますか？', rating: 0 },
        { questionIndex: 8, text: '自分の意見をはっきりと表現できていますか？', rating: 0 },
        { questionIndex: 9, text: '快適でポジティブな雰囲気を作れますか？', rating: 0 }
      ],
    },
    {
      name: '社交性',
      categoryIndex: 3,
      questions: [
        { questionIndex: 0, text: '新しい人と出会うことに興味がありますか？', rating: 0 },
        { questionIndex: 1, text: '社交的な場面でリラックスできていますか？', rating: 0 },
        { questionIndex: 2, text: '他人との会話を楽しむことができていますか？', rating: 0 },
        { questionIndex: 3, text: '異なるタイプの人々とも簡単に打ち解けることができていますか？', rating: 0 },
        { questionIndex: 4, text: 'グループ内でリーダーシップを発揮できていますか？', rating: 0 },
        { questionIndex: 5, text: '人間関係を築くことが得意ですか？', rating: 0 },
        { questionIndex: 6, text: '他人と共感することができていますか？', rating: 0 },
        { questionIndex: 7, text: '多様な文化や背景を持つ人々と交流できていますか？', rating: 0 },
        { questionIndex: 8, text: '社交イベントに積極的に参加していますか？', rating: 0 },
        { questionIndex: 9, text: '他人とのつながりを大切にしますか？', rating: 0 }
      ]
    },
    {
      name: '会話力',
      categoryIndex: 4,
      questions: [
        { questionIndex: 0, text: '相手の話を注意深く聞くことができていますか？', rating: 0 },
        { questionIndex: 1, text: '会話の流れをスムーズに保つことができていますか？', rating: 0 },
        { questionIndex: 2, text: '興味深い話題を提供することができていますか？', rating: 0 },
        { questionIndex: 3, text: '相手が熱く語るような質問をすることができていますか？', rating: 0 },
        { questionIndex: 4, text: '他人との会話で自分の考えを明確に伝えることができていますか？', rating: 0 },
        { questionIndex: 5, text: '適切なジェスチャーや表情を使っていますか？', rating: 0 },
        { questionIndex: 6, text: '他人の話に共感し、反応することができていますか？', rating: 0 },
        { questionIndex: 7, text: '状況に応じて会話のトーンを変えることができていますか？', rating: 0 },
        { questionIndex: 8, text: '会話の中でユーモアを取り入れることができていますか？', rating: 0 },
        { questionIndex: 9, text: '相手に心地よさを与えることができていますか？', rating: 0 }
      ]
    },
    {
      name: '気遣い力',
      categoryIndex: 5,
      questions: [
        { questionIndex: 0, text: '相手の感情や意識に敏感ですか？', rating: 0 },
        { questionIndex: 1, text: '相手の立場に立って考えることができていますか？', rating: 0 },
        { questionIndex: 2, text: '必要とされる時に支援や助けを提供できていますか？', rating: 0 },
        { questionIndex: 3, text: '他人の言動に対して思いやりを持って反応しますか？', rating: 0 },
        { questionIndex: 4, text: '人との関係で細やかな注意を払っていますか？', rating: 0 },
        { questionIndex: 5, text: '他人の成功や達成を祝福できていますか？', rating: 0 },
        { questionIndex: 6, text: '困っている人に手を差し伸べられますか？', rating: 0 },
        { questionIndex: 7, text: '他人の意見や考えを尊重しますか？', rating: 0 },
        { questionIndex: 8, text: '些細なことでもお礼を言えていますか？', rating: 0 },
        { questionIndex: 9, text: '他人の気持ちを傷つけないように配慮していますか？', rating: 0 }
      ]
    },
  ],
  checker: '',
  checkee: '',
}

interface RootState {
  categories: Category[],
  checker: string,
  checkee: string,
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
  updateChecker(state, payload: string) {
    state.checker = payload
  },
  updateCheckee(state, payload: string) {
    state.checkee = payload
  }
}

export const getters: GetterTree<RootState, RootState> = {
  getCategories: (state) => state.categories,
  getChecker: (state) => state.checker,
  getCheckee: (state) => state.checkee,
}

export const actions: ActionTree<RootState, RootState> = {
  // Add any asynchronous actions here
}