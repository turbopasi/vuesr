<template>
  <div class="main-menu">
    <main-menu-header />
    <main-menu-content />
  </div>
</template>

<script>

  import MainMenuHeader  from '@/components/MainMenuHeader';
  import MainMenuContent from '@/components/MainMenuContent';

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

  .main-menu {
    position : fixed;
    width : 260px;
    height : 100%;
    background : #FFFFFF;
    display: table-cell;
    overflow:hidden;
  }

</style>
