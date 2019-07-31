<template>
  <div class="app-content" :class="{ 'full-width' : !mainMenuIsPinned }">

  </div>
</template>

<script>

  export default {
    name: 'container-app-content',
    props: {
      msg: String
    },
    data() {
      return {

      }
    },
    computed : {
      mainMenuIsPinned() { return this.$store.state.mainmenu.isPinned },
    },
    methods : {

    },
    mounted() {

    }
  }

</script>

<style scoped lang="scss">

  .app-content {
    padding : 30px;
    margin-left : 260px;
  }

  .app-content.full-width {
    margin-left : 85px;
  }



</style>
