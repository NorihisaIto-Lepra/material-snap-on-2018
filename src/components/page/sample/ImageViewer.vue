<template>
  <transition appear name="slide-large-img" @after-leave="appearImage">
    <v-img contain
      v-show="displayImg"
      :src="imgSrc"
      @click="changeImage"
      position="center"
      class="ma-2 large-img"
    >
      <transition name="slide-fade">
        <v-layout fill-height
          v-show="showNavigation"
          class="img-text-div"
        >
          <v-flex xs9 align-start flexbox
            class="line-break"
          >
            <span class="img-text" v-text="imgText"/>
          </v-flex>
          <v-spacer/>
        </v-layout>
      </transition>
    </v-img>
  </transition>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
    },
    cards: {
      type: Array,
    },
    displayImg: {
      type: Boolean,
    },
    activeImageIndex: {
      type: Number,
      default: undefined,
    },
    showNavigation: {
      type:Boolean
    },
    imgText: {
      type: String,
      default: '',
    },
  },
  methods: {
    appearImage() {
      this.$emit('appearImage');
    },
    changeImage() {
      this.$emit('changeImage');
    }
  }
}
</script>

<style scoped>

.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
{
  transform: translateY(50px);
  opacity: 0;
}


.slide-large-img-enter-active {
  transition: all .5s ease;
}
.slide-large-img-leave-active {
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-large-img-enter, .slide-large-img-leave-to
{
  transform: translateX(16px);
  opacity: 0;
}


.large-img {
  max-height: 90%;
  height: 76vh;
  font-size: calc( 10vw + 4 * 1rem );
  line-height: 0.13;
}

.img-text-div {
  width:100%;
  height:100%;
  background: rgba(0,0,0,0.6);
  word-break:break-all;
  white-space: normal;
  display: block;
}

.img-text {
  font-size: calc(10% + 0.25vw);
  white-space: pre-wrap;
  word-break:break-all;
}

.line-break {
  word-break:break-all;
  white-space: normal !important;
  display: block !important;
}




</style>
