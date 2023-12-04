<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>この度はご覧いただきありがとうございます❣</h1>
        <p>エンジニア恋愛コンサルタントとして活動しておりますゆーちゃんです😆</p>
        <p>私からはプレゼントを２つお送りさせていただきます。</p>
      </v-col>

      <!-- プレゼント１ -->
      <v-col cols="12">
        <v-card>
          <v-card-title>＜プレゼント１＞<br>5/22 開催「zoom話し方セミナー」招待券</v-card-title>
          <v-card-text>
          </v-card-text>
          <v-card-actions class="d-flex justify-center">
            <v-btn color="primary" :href="present1URL" target="_blank" large>詳細はこちら</v-btn>
          </v-card-actions>
          <!-- 画像リンク -->
          <nuxt-link :to="{ path: present1URL }">
            <v-img :src="present1Image"></v-img>
          </nuxt-link>
        </v-card>
      </v-col>

      <!-- プレゼント２ -->
      <v-col cols="12">
        <v-card>
          <v-row>
            <v-col cols="12">
              <v-card-title>＜プレゼント２＞ モテチェッカー利用券</v-card-title>
              <v-card-text>
                現在鋭意開発中のモテチェッカーを無料でご利用いただけます！<br>
                下記より、ぜひお使いください＾＾
                </v-card-text>  
            </v-col>
            <v-col cols="12" md="6">
              <v-card-text>
                <!-- イメージ図 -->
                <h2>モテチェッカーとは？</h2>
                「モテチェッカー」は、<br>
                あなたの恋愛力をチェックするツールです。<br>
                <br>
                あなたの恋愛力をチェックすることで、<br>
                今後の恋愛に役立てていただければ幸いです😊<br>
                <br>
                <br>
                <br>
                <h2>使い方</h2>
                <br>
                <ol>
                  <li>チェックを依頼したい人を決める(あなたのモテレベルチェックをしたい場合)</li>
                  <li>以下のフォームを入力して「チェックを依頼する」を押す（依頼文がコピーされる）</li>
                  <li>チェックを依頼したい人のLINEにコピーした依頼文を送る</li>
                  <li>チェック依頼を受けた人が、依頼文のURLからチェックを実行する</li>
                  <li>チェック結果を、あなた（チェックされた人）に送ってもらう</li>
                  <li>チェック結果を確認する</li>
                </ol>
                ※ なお、「モテチェッカーを始める」から、自分でチェックをすることも可能です。<br><br>
                <h2>使ってみよう！</h2>
              </v-card-text>
              <v-text-field v-model="checker" label="チェックを依頼したい人"></v-text-field>
              <v-text-field v-model="checkee" label="チェックされる人"></v-text-field>
              <v-card-actions>
                <nuxt-link :to="{ path: '/survey', query: { checker, checkee } }">
                  <v-btn color="primary" large>
                    モテチェッカーを始める
                  </v-btn>
                </nuxt-link>
              </v-card-actions>
              <v-card-text>
                もしくは
              </v-card-text>
              <v-card-actions>
                <v-btn @click="copySurveyURL" color="primary">
                  チェックを依頼する
                </v-btn>
              </v-card-actions>
            </v-col>
            <v-col cols="12" md="6">
              <h2>イメージ図</h2>
              <br>
              <!-- イメージ図（参考画像であることがわかりやすいようなデザインにする） -->
              <v-img src="https://i.gyazo.com/54fc97295ce25d8b9d1b754f5c6ae06c.png" max-width="100%"></v-img>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <!-- プロフィール -->
      <v-col cols="12">
        <v-card>
          <v-row>
            <v-col cols="12" md="6">
              <v-img :src="profileImage" max-width="100%"></v-img>
            </v-col>
            <v-col cols="12" md="6">
              <v-card-title>ゆーちゃん /<br>TechGuide合同会社　代表<br>エンジニア恋愛コンサルタント</v-card-title>
              <v-card-text>
                11年間webエンジニアとして従事<br>
                3回転職・個人でも案件を不定期に受注<br>
                2021年にTechGuide合同会社を設立<br>
                遠距離恋愛失敗×3<br>
                何考えてるかわからないと振られる<br>
                音信不通自然消滅<br>
                コミュ障エンジニアが笑顔の絶えない結婚生活＆社長生活に<br>
                <br>
                エンジニア向け：エンジニア恋愛コンサル・コミュニケーション教育<br>
                企業向け：エンジニア採用支援・ITサポート<br>
                定期開催：月数回異業種交流会・オンラインセミナーを企画<br>
              </v-card-text>
              <v-card-actions>
                <v-btn icon href="https://twitter.com/tashua314" target="_blank">
                  <v-icon>mdi-twitter</v-icon>
                </v-btn>
                <v-btn icon href="https://www.instagram.com/love_and_tech/" target="_blank">
                  <v-icon>mdi-instagram</v-icon>
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  head: {
    title: 'メタバースEXPO出展記念プレゼント',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'メタバースEXPO出展記念プレゼント'
      }
    ]
  },
  data() {
    return {
      present1Image: require('~/assets/event.jpg'),  // プレゼント１の画像へのパス
      present1URL: 'https://bit.ly/3BGz7tn',  // プレゼント１の詳細ページへのURL
      profileImage: require('~/assets/profile.jpg'), // プロフィール画像へのパス
      checker: '', // チェックする人
      checkee: '', // チェックされる人
    }
  },
  methods: {
    // surveyページのシェア（コピー）ボタンを押したときの処理
    copySurveyURL() {
      const link = `${location.origin}/survey?checker=${this.checker}&checkee=${this.checkee}`
      const message = `${this.checker}さん、こんにちは！\n以下のリンクからモテチェッカーにアクセスして、${this.checkee}さんのモテレベルをチェックしてみてください😊\n${link}`;
      navigator.clipboard.writeText(message).then(() => {
        // 成功した場合の処理
        this.$toasted.success('リンクをコピーしました！<br>' + this.checker + 'さんにシェアしてみましょう😊');
      }, () => {
        // 失敗した場合の処理
        this.$toasted.error('リンクのコピーに失敗しました。<br>「モテチェッカーを始める」ボタンを押して、URLをコピーしてください。');
      });
    }
  }
})
</script>

<style scoped>
/* ここで必要なCSSを追加できます */
</style>
