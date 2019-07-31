<template>
  <div class="main-menu-header">
    <div class="inner">

      <!-- LOGO -->
      <div class="brand">
        <a class="">
          <div class="brand-logo">
            <i class="remixicon-star-fill ri-2x" />
          </div>
          <h2 class="brand-text" v-if="!collapsed">
            {{ brandText }}
          </h2>
        </a>
      </div>
      <!--  -->

      <!-- TOGGLE -->
      <div class="toggle" @click="toggleIsPinned" v-if="!collapsed">
        <i class="remixicon-album-line" v-if="isPinned"></i>
        <i class="remixicon-checkbox-blank-circle-line" v-else></i>
      </div>
      <!--  -->

    </div>
  </div>
</template>

<script>

  export default {
    name: 'main-menu-header',
    props: {
      brandText : String,
      collapsed : Boolean,
      isPinned : Boolean
    },
    data() {
      return {

      }
    },
    computed : {

    },
    methods : {

      toggleIsPinned() {
        this.$store.dispatch('mainmenu/TOGGLE_IS_PINNED');
      }

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

  .toggle {
    cursor: pointer;
  }

  .toggle:hover {

  }

</style>
