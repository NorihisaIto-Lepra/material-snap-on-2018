<template>
  <span>2018 レプラホーン株式会社　伊藤仁久</span>
  <!-- 
  <v-layout row wrap>
    <v-btn round
      color="accent"
      @click="clickBack"
    >
      BACK
    </v-btn>
    <v-btn round
      color="accent"
      @click="clickNext"
    >
      NEXT
    </v-btn>

  </v-layout>
    -->
</template>

<script>
  export default {
    methods: {
      clickBack() {
        console.log(this.$router.clickNext);
        this.$emit('clickBack');
      },
      clickNext() {
        this.$emit('clickNext');
      }
    }
  }
</script>