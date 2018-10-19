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
    this.$store.dispatch('navigation/setNextPageName', 'Problem');
  },
  components: {TextBook},
  data() {
    return{
      cards: [
        { title: 'モダンなフレームワークとの相性',
          flex: 12,
          src: require('@/assets/material-workflow.png'),
          content: `<b>コンポーネント指向ベースなので、Angular、React、Vue等のフレームワークと相性抜群。</b>`,
          hiddenContent: `<p>
                          マテリアルデザインという概念自体は共通なので、似たようなライブラリに乗り換えることも、<br>
                          フレームワークを乗り換えたときもカンが効きます。<br>
                          新しいフレームワークに触れるとき、対応するUIライブラリを入れれば、<br>
                          デザインが半分くらい出来上がるため、フレームワーク自体の学習についてモチベーションの維持がしやすいのも地味な利点です。
                          </p>`
        },
        { title: '主要なCSSフレームワーク',
          flex: 6,
          src: require('@/assets/material-workflow.png'),
          content: `
          <ul>
          <li>Materialize</li>
          <li>Material Design for Bootstrap</li>
          </ul>
          `
        },
        { title: 'フレームワーク＋ライブラリ',
          flex: 6,
          src: require('@/assets/material-workflow.png'),
          content: `
          <ul>
            <li>Angular + Angular Material</li>
            <li>React + Material-UI</li>
            <li>Vue + Vuetify</li>
          </ul>
          `
        },
      ]
    }
  }
}

</script>

<style scoped>
</style>
