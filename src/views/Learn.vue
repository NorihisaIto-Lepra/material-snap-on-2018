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
    this.$store.dispatch('navigation/setNextPageName', 'UserInterface');
  },
  components: {TextBook},
  data() {
    return{
      cards: [
        { title: 'なぜ学ぶのか-1',
        src: require('@/assets/note.png'),
        flex: 12 ,
        content: `<b>マテリアルデザインにするつもりがなくても、画面設計の道標になるから。</b>`,
        hiddenContent: `別に「みんなマテリアルデザインで作ろう！！」という話ではない。<br>
        ただ、コンポーネントの切り方、色はどう決めるのか、グリッドレイアウトをどのくらい実現させるのか、など、
        画面設計をしているときに「Googleならどうするかな…」と考えると、ベターな選択ができることが多い。 
        `
        },
        { title: 'なぜ学ぶのか-2',
        src: require('@/assets/note.png'),
        flex: 12 ,
        content: `<b>CSSを学ぶ際のお手本にする。（私はそうしました。）</b>`,
        hiddenContent: `
          マテリアルデザインでは「こういうコンポーネントはこう作りましょう」が明確に定義されている。<br>
          そのため、がむしゃらにCSSを覚えるよりも、まずはマテリアルデザインをベースに「作りたいもの」を設計したり、<br>
          ライブラリ内のコンポーネントを解析して、そこから「このCSSをどう書くと（消すと）どうなるか」を読み解くことで、
          覚える対象をよく使うCSSに絞りつつ、勉強のモチベーションを維持しやすい。
          `
        },
      ]
    }
  }
}

</script>

<style scoped>
</style>
