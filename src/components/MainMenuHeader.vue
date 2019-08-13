<template>

  <!-- Header of Main Menu -->
  <!-- Includes Logo, Text and Pin Button -->

  <div class="main-menu-header">
    <div class="inner">

      <!-- Logo & Logo Text -->
      <!-- Links to Home-View of Index -->
      <div class="brand">
        <router-link :to="{ name : 'index'}">
          <div class="brand-logo">
            <img src="@/assets/logo-menu.png" alt="Logo">
          </div>
          <h2 class="brand-text" v-if="!collapsed">
            {{ brandText }}
          </h2>
        </router-link>
      </div>
      <!--  -->

      <!-- Pin Button to Toggle isPinned -->
      <!-- Switches Icon based on isPinned Status -->
      <div class="toggle" @click="toggleIsPinned" v-if="!collapsed">
        <b-icon icon="circle-outline" v-if="!isPinned"></b-icon>
        <b-icon icon="adjust" v-else></b-icon>
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

    }
  }

</script>

<style scoped lang="scss">

  .main-menu-header {
    height : 5rem;
    display : flex;
    padding : .35rem 1rem .3rem 1.64rem;
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
  }

  .toggle {
    cursor: pointer;
  }

  // DARK MODE ADJUSTMENTS

  .is-darkmode .toggle { color:#777777; }
  .is-darkmode .brand-text { color:#ffffff; }

  .is-lightmode .toggle { color:#D9D9D9; }
  .is-lightmode .brand-text { color:#333333; }


</style>
