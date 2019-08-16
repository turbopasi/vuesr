<template>

  <!-- App Content Top Bar -->
  <div class="app-content-top-bar" :class="{ 'full-width' : !mainMenuIsPinned }" >
    <div class="inner">
      <slot></slot>
    </div>
  </div>

</template>

<script>

  export default {
    name: 'app-content-top-bar',
    props: {
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
    top:30px;

  }

  .inner {
    display: flex;
    align-items: center;
  }

  .app-content-top-bar.full-width {
    width:calc(100% - 145px);
  }

  .is-darkmode .app-content-top-bar { background: #222222; }
  .is-lightmode .app-content-top-bar { background: #FFFFFF; }

</style>
