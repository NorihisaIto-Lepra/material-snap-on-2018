<template>
  <div class="footer-message">
    <span>Snap-On By Norihisa Ito @2018/10/24</span>
  </div>
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

<style scoped>
  .footer-message {
    padding-left: 24px;
  }
</style>