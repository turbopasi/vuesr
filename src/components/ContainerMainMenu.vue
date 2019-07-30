<template>
  <div class="main-menu" >

    <main-menu-header />
    <main-menu-content
      v-bind:groups="config.groups" />

  </div>
</template>

<script>

  import MainMenuHeader  from '@/components/MainMenuHeader';
  import MainMenuContent from '@/components/MainMenuContent';

  // Main Menu Config
  import config from '@/assets/main-menu-config';

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
        config : config,
      }
    },
    computed : {
      isPinned() { return this.$store.state.mainmenu.isPinned }
    },
    methods : {

    },
    mounted() {

    }
  }

</script>

<style scoped lang="scss">

  .main-menu {
    position : fixed;
    width : 260px;
    height : 100%;
    background : #FFFFFF;
    display: table-cell;
    overflow:hidden;
  }

</style>
