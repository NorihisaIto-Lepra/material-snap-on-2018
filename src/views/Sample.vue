<template>
  <div class="pt-2 pb-2" style="height:100%">
    <v-btn
      dark fab fixed bottom right
      color="accent"
      @click="showNavigation=!showNavigation;"
    >
      <v-icon v-text="buttonTxt"/>
    </v-btn>

    <v-card
      class="pa-2 preview-card"
      :img="imgSrcBackground"
    >
      <contents-navigation
        :cards="cards"
        :showNavigation="showNavigation"
        :activeImageIndex="activeImageIndex"
        :showCardImg="showCardImg"
        @cardClicked="cardClicked"
        @appearCardImage="appearCardImage"
      />

      <image-viewer
        :imgSrc="imgSrc"
        :imgText="imgText"
        :cards="cards"
        :activeImageIndex="activeImageIndex"
        :displayImg="displayImg"
        :showNavigation="showNavigation"
        @appearImage="appearImage"
        @changeImage="changeImage"
      />
    </v-card>
  </div>
</template>

<script>
import contentsNavigation from '../components/page/sample/ContentsNavigation.vue';
import imageViewer from '../components/page/sample/ImageViewer.vue';

export default {
  created() {
    //Textbookのほうのナビゲーション消す
    this.$store.dispatch('navigation/changeDisplayFixedButton', false);
  },
  components: {
    contentsNavigation,
    imageViewer,
  },
  computed: {
    buttonTxt() {
      if (this.showNavigation) {
        return 'close';
      }
      return 'book';
    }
  },
  methods: {
    createImgSrc(imgSrc, showHadaka = false , imgNumber = 1) {
      if (showHadaka) {
        return require('@/assets/event/hadaka.png')
      }
      return require('@/assets/event/' + imgSrc + '/' + imgNumber + '.jpg')
    },
    cardClicked(index) {
      // 引っ込めるtransitionのために一度フラグを折る
      this.displayImg=false;
      this.showCardImg=false;
      this.activeImageIndex = index;
      this.nextDisplayContents = this.cards[index];
    },
    appearImage() {
      // 引っ込めるtransition完了後に呼ばれる
      this.displayImg=true;
      this.imgTextTitle = this.nextDisplayContents.title;
      this.imgText = this.nextDisplayContents.content;
      this.imgSrc = this.createImgSrc(this.nextDisplayContents.src);
      this.imgSrcArrayActiveIndex=0;
    },
    appearCardImage() {
      this.showCardImg=true;
    },
    changeImage() {
      // 3枚くらい写真あるんで切り替え。ファイル名＝imgSrcArrayActiveIndex+1.jpg
      if(typeof this.imgSrcArrayActiveIndex === 'undefined') {
        // 初期値のときは写真ファイル参照してないんでそのままreturn
        return;
      }
      const max = this.cards[this.activeImageIndex].imgNumber.length;
      if(this.imgSrcArrayActiveIndex + 2 > max) {
        // 初期化
        this.imgSrcArrayActiveIndex=0;
        this.imgSrc = this.createImgSrc(this.cards[this.activeImageIndex].src,false,1)
      } else {
        this.imgSrcArrayActiveIndex++;
        this.imgSrc = this.createImgSrc(this.cards[this.activeImageIndex].src,false,this.imgSrcArrayActiveIndex+1);
      }
      return;
    },
  },
  data() {
    return{
      showNavigation: true,
      showCardImg:true,
      imgSrcBackground: require('@/assets/event/wa.png'),
      activeImageIndex: undefined,
      imgSrc:require('@/assets/event/hadaka-choise.png'),
      imgSrcArrayActiveIndex:undefined,
      nextDisplayContents:{},
      displayImg:true,
      imgTextTitle: 'レプラホーン イベント写真庫',
      imgText: '→のカードをクリックしてください',
      cards: [
        { title: '【10/19(金)開催】大木さん主催：ボドゲ会：第3回',
        flax: 12,
        src: 'bodoge',
        imgNumber: [1,2,3],
        content: 
`毎回10名超えの参加と大好評の大木さん主催ボードゲーム大会
主催の大木さんより 「今まで持って行った中で『またやりたい！』と思ったものがあればリクエストください！！」 とのこと
とりあえず今回は荷物を減らすために既存ゲームは４つ持って行きます！
世界の7不思議/7 wonders
インサイダーゲーム
犯人は踊る
宝石の煌き (Splendor)
新しくShadowHunters買ったので、それも追加で持って行きます。
`,
        },

        { title: '【10/18(木)開催】藤井さん主催：【MTG部】[ラヴニカのギルド]発売記念　ドラフト大会',
        flax: 6,
        src: 'mtg',
        imgNumber: [1],
        content: `
10/5に発売となったMTGの新エキスパンション「ラヴニカのギルド」をドラフトという開封したものだけで遊ぶ会
MTGはご存知の通り、世界で最も有名なトレーディングカードゲーム 「マジック：ザ・ギャザリング(MAGIC:THE GATHERING)」 のこと
`,
        },
        { title: '10/08(月)  	原宿にあるリアル脱出ゲームに参加',
        src: 'konan',
        imgNumber: [1,2,3],
        flex: 6 ,
        content: `
最後、厳しかったぁぁぁぁぁぁぁ
これはリベンジしたいやつですな。
`,
        },
        { title: '太田さん送別会BY同期',
        flax: 6,
        src: 'ota',
        imgNumber: [1,2,3],
        content: 
`・日本一ウザいはずの店長が体調不良によりウザさ７割引
・店長が回ってこない弊害（多分）として肉少なめ炭水化物多め
・その場にいない松本Wさんとスワガットの話題がとりあえず話題には出る
・志村さんベリーダンスに引き気味
・タシロス＆太田さん食い過ぎによりビールが飲めない
`,
        },
]
    }
  }
}

</script>

<style lang="stylus" scoped>
.preview-card {
  position: relative;
  height: 100%;
}
</style>
