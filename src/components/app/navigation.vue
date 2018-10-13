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
          title: 'Description',
          path: '/description',
        },
        {
          icon: 'book',
          title: 'Sample',
          path: '/sample',
        },
      ],
    }
  }
}
</script>
