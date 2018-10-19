<template>
  <v-app dark>
    <v-navigation-drawer absolute temporary app dark
      v-model="drawer"
      class="background"
    >
      <appNavigation/>
    </v-navigation-drawer>

    <v-toolbar app clipped-left dark class="primary darken-3">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>

    <v-content style="position:relative;">
      <v-scroll-x-transition mode="out-in">
        <router-view></router-view>
      </v-scroll-x-transition>
    </v-content>

    <v-scale-transition mode="out-in">
      <v-btn
        v-show="displayFixedButton"
        dark fab fixed bottom right
        color="accent"
        @click="$router.push({name: nextPageName})"
      >
        <v-icon>arrow_forward</v-icon>
      </v-btn>
    </v-scale-transition>

    <v-footer dark
      height="auto"
      color="primary darken-3"
    >
      <appFooter/>
    </v-footer>
  </v-app>
</template>

<script>
import {mapState} from "vuex";
import appFooter from './components/app/footer';
import appNavigation from './components/app/navigation';

export default {
  components: {
    appFooter,
    appNavigation,
  },
  methods: {
    transit() {
      this.items.some((item,index,array) => {
        if(this.$route.path === item.path) {
          this.$router.push({path: array[index+1].path});
          return true;
        }
        return false;
      })
    }
  },
  computed:{
    ...mapState('navigation', [
      'displayFixedButton',
      'nextPageName',
    ]),
  },
  name: 'App',
  data () {
    return {
      drawer: false,
      fixed: false,
      title: 'Material Design Snap-On',
    }
  }
}
</script>
