<template>

  <!-- Main Menu will automatically collapse if mouse is not hovering over it -->
  <!-- and if the menu is currently not pinned -->

  <div class="main-menu"
    v-on:mouseenter="setIsHover(true)"
    v-on:mouseleave="setIsHover(false)"
    :class="[ !isHover && !isPinned ? 'is-collapsed' : 'is-expanded' ]"
    >

    <!-- Header of Main Menu -->
    <!-- Includes Logo, Text and Pin Button -->
    <main-menu-header
      v-bind:brandText="brandText"
      v-bind:collapsed="shouldBeCollapsed"
      v-bind:isPinned="isPinned"
      />

    <!-- Content of Main Menu -->
    <!-- Includes all groups and nav buttons -->
    <main-menu-content
      v-bind:groups="groups"
      v-bind:collapsed="shouldBeCollapsed"
      />

  </div>
</template>

<script>

  import MainMenuHeader  from '@/components/MainMenuHeader';
  import MainMenuContent from '@/components/MainMenuContent';

  // Main Menu Config

  export default {
    name : 'container-main-menu',
    components : {
      MainMenuHeader,
      MainMenuContent
    },
    data() {
      return {
        isHover : false
      }
    },
    computed : {
      isPinned()  	      { return this.$store.state.mainmenu.isPinned },
      groups()            { return this.$store.state.mainmenu.groups },
      brandText ()        { return this.$store.state.mainmenu.brandText },
      shouldBeCollapsed() { return !this.isHover && !this.isPinned }
    },
    methods : {

      setIsHover(bool) {
        this.isHover = bool;
      },

    }
  }

</script>

<style scoped lang="scss">

  .main-menu {
    position : fixed;
    height : 100%;
    display: table-cell;
    overflow:hidden;
    transition: width 0.3s;
  }

  .main-menu.is-collapsed {
    width:85px;
  }

  .main-menu.is-expanded {
    width:260px;
  }

  // DARK MODE ADJUSTMENTS

  .is-darkmode .main-menu { background:#222222; }
  .is-lightmode .main-menu { background:#ffffff; }

</style>
