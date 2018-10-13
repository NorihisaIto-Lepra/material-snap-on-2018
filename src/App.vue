<template>
  <v-app>
    <v-navigation-drawer absolute temporary app dark
      v-model="drawer"
      class="background"
    >
      <appNavigation/>
    </v-navigation-drawer>

    <v-toolbar app clipped-left dark class="primary darken-2">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>

    <v-content class="background">
      <router-view/>
    </v-content>

    <v-footer
      height="auto"
      color="primary darken-2"
    >
      <appFooter
        @clickNext="clickNext"
        @clickBack="clickBack"
      />
    </v-footer>
  </v-app>
</template>

<script>
import appFooter from './components/app/footer';
import appNavigation from './components/app/navigation';

export default {
  components: {
    appFooter,
    appNavigation,
  },
  methods: {
    clickNext() {
      console.log('clickNext');
    },
    clickBack() {
      console.log('clickBack');
    },
  },
  name: 'App',
  data () {
    return {
      drawer: false,
      fixed: false,
      title: 'Material Design Snap-On'
    }
  }
}
</script>
