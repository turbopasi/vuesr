<template>
  <div
    class="main-menu"
    v-on:mouseover="mouseHover = !mouseHover"
    :class="{
      collapse : !isPinned && mouseHover
    }"
    >
    <main-menu-header v-on:toggleIsPinned="toggleIsPinned" />
    {{ mouseHover }}
    <main-menu-content :groups="config.groups"/>
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
        isPinned : false,
        mouseHover : false,
      }
    },
    computed : {

    },
    methods : {

      toggleIsPinned() {
        this.isPinned = !this.isPinned;
      }

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
