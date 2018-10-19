<template>
  <v-layout column align-center>
    <v-layout row justify-space-between>
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
    this.$store.dispatch('navigation/changeDisplayFixedButton', false);
//    this.$store.dispatch('navigation/setNextPageName', 'Learn');
  },
  components: {TextBook},
  data() {
    return{
      cards: [
        { title: 'SnapOnの目標', src: require('@/assets/flower.jpg'), flex: 12 ,
        content: `SnapOnの場では、<br>前述の問題と約１年半格闘したテクニックやコツ、苦労話を、<br>たまにCSSなんかも交えながら紹介します。<br>
<b>マテリアルデザインのガイドラインを丁寧に読み解いていくと日が暮れるので</b><br>
最低限の基本コンセプトの紹介と、ライブラリが絶対に解決してくれないところ（EX:デザインに個性を反映する方法）に絞って解説します。`
        },
        { title: '実習', src: require('@/assets/road.jpg'), flex: 12,
          content: `Vueと、ライブラリも少々触ってみる気概のある人は、この資料のカスタマイズをしてもらいます。</br>
          環境構築まではちょっとね…という人は、要件定義するつもりで、紙にお絵かきしてみましょう。`
        },
      ]
    }
  }
}

</script>

<style scoped>
</style>
