<template>

  <!-- App Content Board will hold actual content of one page -->
  <!-- Based on route components, dynamic amount of named router vuews will be rendered here -->
  <div class="app-content-board">
    <div class="board-single" v-for="(routerViewName, index) in routerViews" :key="'router-view-' + index">
      <router-view  :name="routerViewName" />
    </div>
  </div>

</template>

<script>

  export default {
    name: 'app-content-board',
    props: {
      msg: String
    },
    data() {
      return {
        routerViews : []
      }
    },
    computed : {

    },
    methods : {
      updateRouterViews() {
        this.routerViews = Object.keys(this.$route.matched[this.$route.matched.length - 1].components);
      }
    },
    watch: {
      '$route' () {
        this.updateRouterViews();
      }
    },
    mounted() {
      this.updateRouterViews();
    }
  }

</script>

<style scoped lang="scss">

  .app-content-board {
    margin-top:25px;
  }

  .board-single {
    padding:20px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.02);
    border-radius: 5px;
    min-height:400px;
  }

  .board-single:not(:last-child) {
    margin-bottom:25px;
  }

  .is-darkmode .board-single { background: #222222; }
  .is-lightmode .board-single { background: #FFFFFF; }

</style>
