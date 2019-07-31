<template>
  <div class="main-menu"
    v-on:mouseenter="setIsHover(true)"
    v-on:mouseleave="setIsHover(false)"
    :class="[ !isHover && !isPinned ? 'is-collapsed' : 'is-expanded' ]"
    >

    <main-menu-header
      v-bind:brandText="brandText"
      v-bind:collapsed="shouldCollapse"
      v-bind:isPinned="isPinned"
      />

    <main-menu-content
      v-bind:groups="groups"
      v-bind:collapsed="shouldCollapse"
      />

  </div>
</template>

<script>

  import MainMenuHeader  from '@/components/MainMenuHeader';
  import MainMenuContent from '@/components/MainMenuContent';

  // Main Menu Config

  export default {
    name : 'container-main-menu',
    props : {
    },
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
      isPinned() { return this.$store.state.mainmenu.isPinned },
      groups() { return this.$store.state.mainmenu.groups },
      brandText () { return this.$store.state.mainmenu.brandText },
      shouldCollapse() { return !this.isHover && !this.isPinned }
    },
    methods : {

      setIsHover(bool) {
        this.isHover = bool;
      },

    },
    mounted() {

    }
  }

</script>

<style scoped lang="scss">

  .main-menu {
    position : fixed;
    height : 100%;
    background : #FFFFFF;
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

</style>
