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
    this.$store.dispatch('navigation/setNextPageName', 'Solution');
  },
  components: {TextBook},
  data() {
    return{
      imgSrc: require('@/assets/cave.jpg'),
      titleText: `マテリアルデザインの導入にあたっての参入障壁、注意点、問題点は例えば以下が挙げられます。`,
      cards: [
        {
          title: '問題点',
          flex: 6 ,
          src: require('@/assets/google-io.png'),
          content: `デザインが似通ってくる（個性が出しにくい）
          `
        },
        { title: '障壁',
          src: require('@/assets/cave.jpg'), flex: 6,
          content: `デザインガイドが全部英語、かつ長い
          `
        },
      ]
    }
  }
}

</script>

<style scoped>
.problem-cards {
  min-height : 20vh;
  max-height : 30vh;
}
</style>
