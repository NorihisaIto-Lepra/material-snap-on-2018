<template>
  <v-card>
    <v-img
      :src="imgSrc"
      height="16vh"
      position="top center"
      gradient="to top left, rgba(0,0,0,.20), rgba(0,0,50,.80)"
    >
      <v-container fill-height fluid pa-2>
        <v-layout fill-height>
          <v-flex xs12 align-end flexbox>
            <span class="headline white--text" v-text="title"/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>
    <v-card-title>
      <div>
        <span v-html="content"/>
      </div>
    </v-card-title>

    <template v-if="hiddenContent.length > 0">
      <v-card-actions style="position:relative;">
        <v-btn icon @click="show = !show" style="position: absolute; right:12px; bottom:12px;">
          <v-icon>{{ show ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
        </v-btn>
      </v-card-actions>
      <v-slide-y-transition>
        <v-card-text v-show="show">
          <span v-html="hiddenContent"/>
        </v-card-text>
      </v-slide-y-transition>
    </template>
  </v-card>
</template>

<script>
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
    }
  },
  methods: {
  }
}
</script>