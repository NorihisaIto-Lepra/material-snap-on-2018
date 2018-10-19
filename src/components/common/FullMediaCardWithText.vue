<template>
  <v-card  v-show="canShowCard" :class="cardClass">
    <v-img
      :src="rumdamImgSrc"
      contain
      height="80%"
      class="card-image"
      position="top center"
      :gradient="gradientParam"
      @mouseover="gradient=true"
      @mouseout="gradient=false"
      @click="execExtend"
    >
      <v-fade-transition>
        <v-container v-show="gradient" fill-height fluid pa-2>
          <v-layout fill-height>
            <v-flex xs12 align-end flexbox>
              <span class="content-text white--text" v-html="content"/>
            </v-flex>
          </v-layout>
        </v-container>
      </v-fade-transition>
    </v-img>
    <v-card-title>
      <span v-text="title"/>
    </v-card-title>
  </v-card>
</template>

<script>
  import {mapState} from "vuex";

export default {
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    hiddenContent: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      show:false,
      gradient:false,
      clicked:false,
    }
  },
  methods: {
    execExtend(){
      this.$store.dispatch('sample/setExtended', !this.clicked)
      this.clicked=!this.clicked;
      this.$nextTick(() => {
        this.$emit('changeColumns');
      });
    }
  },
  mounted() {
      this.$store.dispatch('sample/setExtended', false);
  },
  computed: {
    ...mapState('sample', [
      'extended',
    ]),
    rumdamImgSrc() {
      return require('@/assets/event/' + this.imgSrc + '/' + '1' + '.jpg')
    },
    gradientParam() {
      if(this.gradient) {
        return 'to top left, rgba(0,0,0,.20), rgba(0,0,50,.80)'
      }
      return undefined;
    },
    cardClass() {
      if(this.extended) {
        return 'card-extended';
      }
      return 'card'
    },
    canShowCard() {
      if(this.clicked) {

        return true;
      }
      if( !this.clicked && this.extended) {
        return false;
      }
      return true;
    }
  }
}
</script>

<style lang="stylus" scoped>
.card {
  min-height: 300px;
  max-height: 100%;
  height: 30vh;
  font-size: calc(70% + 0.2vw);
  transition: all 800ms 0s ease;
}

.card-extended {
  height: 80vh;
  transition: all 300ms 0s ease;
}

.card-image {
  transition: all 300ms 0s ease;
}

.content-text {
  font-size: calc(60% + 0.5vw);
}

</style>