<template>
  <v-list>
    <v-list-tile
      value="true"
      v-for="(item, index) in items" :key="index"
      @click="transit(index)"
      :class="{'selected': $route.path === items[index].path}"
    >
      <v-list-tile-action>
        <v-icon v-html="item.icon"/>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title v-text="item.title"/>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
export default {
  methods: {
    transit(index) {
      this.$router.push({ path:this.items[index].path });
    }
  },
  data () {
    return {
      items: [
        {
          icon: 'home',
          title: 'Home',
          path: '/',
        },
        {
          icon: 'description',
          title: '概要',
          path: '/description',
        },
        {
          icon: 'edit',
          title: 'なぜ学ぶのか',
          path: '/learn',
        },
        {
          icon: 'pageview',
          title: '見た目',
          path: '/user-interface',
        },
        {
          icon: 'mood_bad',
          title: '問題点',
          path: '/problem',
        },
        {
          icon: 'mood',
          title: '解決策＆今回の狙い',
          path: '/solution',
        },
        {
          icon: 'book',
          title: 'サンプル',
          path: '/sample',
        },
      ],
    }
  }
}
</script>
