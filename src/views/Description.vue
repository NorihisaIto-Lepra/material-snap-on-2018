<template>
  <v-layout column align-center>
    <v-layout row>
      <v-flex xs12 sm10 offset-sm1>
        <text-book
          :cards="cards"
        />
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
import TextBook from '../components/common/TextBook.vue';

export default {
  created() {
    this.$store.dispatch('navigation/changeDisplayFixedButton', true);
    this.$store.dispatch('navigation/setNextPageName', 'Learn');
  },
  components: {TextBook},
  data() {
    return{
      cards: [
        {
          title: 'マテリアルデザインとは', src: require('@/assets/google-io.png'),
          flex: 12,
          content: `マテリアルデザインは、Googleが2014年に発表した、UIの
                  <b><ruby><rb>SYSTEM</rb><rp>（</rp><rt>体系</rt><rp>）</rp></ruby></b>。`,
          hiddenContent: `
                  Androidの基底にあるデザインということでおなじみ。<br>
                  2018年現在でもガイドラインとデザイン補助ツールの更新が続けられています。<br>
                  <a href="https://material.io/design/guidelines-overview/">ガイドライン</a>
                  は１１章からなり、マージンのとり方、影の付け方、あらゆるルールが事細かに定義されている他、<br>
                  デザインの助けになるアドバイス集も備えています。`
        },
        {
          title: '目的',
          flex: 12,
          src: require('@/assets/road.jpg'),
          content: `<b>UIを統一し、デバイスを問わず、アプリケーションを問わず、ユーザーが迷わず使えるようにするため。</b>`,
          hiddenContent: `
                  <p>
                  Androidアプリ開発では避けては通れない道ですが、Webアプリに適用すれば、UIはスマホアプリに近づきます。<br>
                  当初は「GmailのUIがスマホ用とPC用で違いすぎる！」ということで、統一するためのプロジェクトでした。</p>

                  <p>最大の利点はUIが馴染みあるものに統一されることですが、次点として「とりあえずが作りやすい」ということがあります。
                  ガイドラインに従っておけば（従っているライブラリさえ入れれば）、最低限見られる感じに整うため、<br>
                  管理画面や社内ツールといった、ストレス無く使えればいいものについて、<br>
                  とりあえずマテリアルデザインにしておくと、設計コスト減になることがあります。</p>
          `
        },
        { title: '見た目',
          flex: 12,
          src: require('@/assets/shibo-washi-pattern-04.jpg'),
          content: `<b>フラットデザインに、スキューモフィズムの概念を取り入れた。</b><br>
                    ※スキューモフィズム…現実世界のモノの見た目にデザインを似せること`,
          hiddenContent: `
                    <p>
                    このコンセプトの背景としては、Microsoftあたりが好きなフラットデザイン（メトロUI）では、<br>
                    見た目がシンプルに整う一方、シンプルにしすぎてインターフェースが分かりづらくなるという問題があったことが挙げられます。</p>
                    <p>
                    小耳に挟んだ程度だと勘違いしがちですが、Bootstrapと競合するものではありません。
                    `
        },
      ]
    }
  }
}

</script>

<style scoped>
</style>
