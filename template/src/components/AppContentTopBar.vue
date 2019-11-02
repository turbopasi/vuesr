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
    box-shadow: 0 1px 20px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.05);
  }

  .app-content-top-bar.full-width {
    width:calc(100% - 145px);
  }

  .app-content-top-bar::after {
    position:absolute;
    content: ' ';
    height:30px;
    width:100%;
    top:-30px;
  }

  .inner {
    display: flex;
    align-items: center;
  }

  .is-darkmode .app-content-top-bar { background: #222222; }
  .is-lightmode .app-content-top-bar { background: #FFFFFF; }

  .is-darkmode .app-content-top-bar::after { background: #2A2A2A; }
  .is-lightmode .app-content-top-bar::after { background: #F8F8F8; }

</style>
