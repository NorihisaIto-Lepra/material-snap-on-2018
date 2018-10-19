<template>
  <v-container
    fluid
    grid-list-md
  >
    <v-layout row wrap>
      <v-flex justify-content
      class="pa-2"
        v-for="(card,index) in cards" :key="index"
        v-bind="{ [`xs${card.flex}`]: true }"
      >
        <media-card-with-text
          :imgSrc=card.src
          :title=card.title
          :content=card.content
          :hiddenContent=card.hiddenContent
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import MediaCardWithText from './MediaCardWithText';

export default {
  components: {MediaCardWithText},
  props: {
    cards: {
      Type: Array
    },
  },
}
</script>