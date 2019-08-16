<template>

  <!-- App Content Container -->
  <!-- Will automatically expand to fullwidth depending on main menu status -->

  <div class="app-content" :class="{ 'full-width' : !mainMenuIsPinned }">

    <!-- App Content Top Bar -->
    <!-- Includes various hotlinks, account avatar, language, messages, ...  -->
    <!-- Can depend on current route -->
    <app-content-top-bar
      v-bind:hotlinks="hotlinks"
      v-bind:account="account"
      v-bind:mainMenuIsPinned="mainMenuIsPinned"
      >
    </app-content-top-bar>

    <router-view/>
  </div>
</template>

<script>

  import AppContentTopBar from '@/components/AppContentTopBar';

  export default {
    name : 'container-app-content',
    components : {
      AppContentTopBar
    },
    props : {
      msg : String
    },
    data() {
      return {
        //temp
        hotlinks : [],
        account  : {}
      }
    },
    computed : {
      mainMenuIsPinned() { return this.$store.state.mainmenu.isPinned },
    }
  }

</script>

<style scoped lang="scss">

  .app-content {
    padding : 30px;
    margin-left : 260px;
  }

  .app-content.full-width {
    margin-left : 85px;
  }



</style>
