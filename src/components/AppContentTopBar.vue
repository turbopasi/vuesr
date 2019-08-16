<template>

  <!-- App Content Top Bar -->
  <div class="app-content-top-bar" :class="{ 'full-width' : !mainMenuIsPinned }" >

  </div>

</template>

<script>

  export default {
    name: 'app-content-top-bar',
    props: {
      hotlinks : Array,
      account  : Object,
      mainMenuIsPinned : Boolean
    },
    data() {
      return {

      }
    },
    computed : {

    },
    methods : {

    },
    mounted() {

    }
  }

</script>

<style scoped lang="scss">

  .app-content-top-bar {
    background:white;
    height:50px;
    position:fixed;
    border-radius:5px;
    width:calc(100% - 320px);
  }

  .app-content-top-bar.full-width {
    width:calc(100% - 145px);
  }

  .is-darkmode .app-content-top-bar { background: #222222; }
  .is-lightmode .app-content-top-bar { background: #FFFFFF; }

</style>
