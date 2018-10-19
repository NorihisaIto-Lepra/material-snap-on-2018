<template>
  <v-slide-y-transition>
    <v-card v-if="showNavigation"
      class="secondary mt-2 d-inline-block elevation-24 inline-navigation"
    >
      <v-navigation-drawer
        class="secondary darken-3"
        floating
        permanent
        stateless
        value="true"
      >
        <v-layout column>
          <v-flex
            class="pa-2"
            v-for="(card,index) in cards" :key="index"
            @click="clickedEach(card , index)"
          >
            <v-card hover ripple>
             <span class="event-text" v-text="card.title"/>
              <transition appear name="slide-fade-card"
                @after-leave="$emit('appearCardImage')"
              >
                <v-img
                  v-if="activeImageIndex !== index || showCardImg"
                  :src="createImgSrc(card.src,activeImageIndex === index)"
                  height="10vh"
                  class="card-image"
                  position="top center"
                />
                </transition>
            </v-card>
          </v-flex>
        </v-layout>
      </v-navigation-drawer>
    </v-card>
  </v-slide-y-transition>
</template>


<script>
export default {
  props: {
    showNavigation: {
      type: Boolean,
      default: true,
    },
    cards: {
      type: Array,
    },
    activeImageIndex: {
      type: Number,
      default: undefined,
    },
    showCardImg: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    createImgSrc(imgSrc, showPlaceholder = false , imgNumber = 1) {
      if (showPlaceholder) {
        return require('@/assets/event/hadaka.png')
      }
      return require('@/assets/event/' + imgSrc + '/' + imgNumber + '.jpg')
    },
    clickedEach(card, index) {
      this.$emit('cardClicked', index);
    }
  }
}


</script>

<style scoped>
.inline-navigation {
  position: absolute;
  right :0px;
  max-height: 64vh;
  max-width: 24%;
  overflow-y: scroll;
  z-index: 2;
}

.card-image{
  z-index: 2;
}

.slide-fade-card-enter-active {
  transition: all 50ms ease;
}
.slide-fade-card-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-card-enter, .slide-fade-card-leave-to
{
  transform: translateX(-30vw);
  opacity: 0;
}

.event-text {
  font-size: calc(1vw + 1vh);
}

</style>