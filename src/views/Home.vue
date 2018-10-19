<template>
  <v-container fluid  transition="slide-x-reverse-transition">
    <v-layout column align-center>
      <div class="title-area">
        <blockquote>
          <h2 class="display-4 home-title">Hello, Material Design</h2>
          <h4 class="display-3 font-weight-thin home-title">WITH Vue.js & Vuetify</h4>
        </blockquote>
      </div>
      <img src="@/assets/logo.png" alt="Vuetify.js" class="mt-5">
      <v-btn large
        class="mt-5"
        color="accent"
        @click="clickStart"
      >
        Let's START !
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    created() {
      this.$store.dispatch('navigation/changeDisplayFixedButton', false);
      //this.$store.dispatch('navigation/setNextPageName', 'Description');
    },
    methods: {
      clickStart() {
        this.$router.push({ name:'Description' });
      }
    }
  }


</script>

<style scoped>
.title-area {
  margin: auto;
}
.home-title {
  font-family: 'exo', 'Roboto', sans-serif !important;
}
</style>
