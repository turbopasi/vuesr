<template>
  <div class="main-menu-header">
    <div class="inner">

      <!-- LOGO -->
      <div class="brand">
        <a class="">
          <div class="brand-logo">
            <star-icon class="icon-2x icon-primary" />
          </div>
          <h2 class="brand-text">
            Vueser
          </h2>
        </a>
      </div>
      <!--  -->

      <!-- TOGGLE -->
      <div class="toggle">
        <album-icon />
      </div>
      <!--  -->

    </div>
  </div>
</template>

<script>

  export default {
    name: 'main-menu-header',
    props: {
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

  .main-menu-header {
    position: relative;
    width: 260px;
    height : 5rem;
    padding : .35rem 1rem .3rem 1.64rem;
    display : flex;
  }

  .inner {
    display:flex;
    flex: 1;
    align-items: center;
  }

  .brand {
    flex : 1;
  }

  .brand a {
    display: flex;
    align-items: center;
  }

  .brand-logo {
    width : 35px;
  }

  .brand-text {
    padding-left : 1rem;
    color : #500afa;
  }

</style>
