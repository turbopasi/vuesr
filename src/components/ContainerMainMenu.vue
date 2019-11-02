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
    <vue-perfect-scrollbar class="scroll-area" :settings="settings" @ps-scroll-y="scrollHandle">
    <main-menu-content
      v-bind:groups="groups"
      v-bind:badges="badges"
      v-bind:collapsed="shouldBeCollapsed"
      />
    </vue-perfect-scrollbar>

  </div>
</template>

<script>

  import MainMenuHeader  from '@/components/MainMenuHeader';
  import MainMenuContent from '@/components/MainMenuContent';
  import VuePerfectScrollbar from 'vue-perfect-scrollbar'

  export default {
    name : 'container-main-menu',
    components : {
      MainMenuHeader,
      MainMenuContent,
      VuePerfectScrollbar
    },
    data() {
      return {
        isHover  : false,
        settings : {
          //maxScrollbarLength : 60,
          wheelSpeed : 1,
          wheelPropagation: true,
          suppressScrollX : true
        }
      }
    },
    computed : {
      isPinned()  	      { return this.$store.state.mainmenu.isPinned },
      groups()            { return this.$store.state.mainmenu.groups },
      badges()            { return this.$store.state.mainmenu.badges },
      brandText ()        { return this.$store.state.mainmenu.brandText },
      shouldBeCollapsed() { return !this.isHover && !this.isPinned }
    },
    methods : {

      setIsHover(bool) {
        this.isHover = bool;
      },

      scrollHandle(event) {
      }

    }
  }

</script>

<style scoped lang="scss">

  .main-menu {
    top: 0;
    position : fixed;
    height : 100%;
    display: table-cell;
    overflow: hidden;
    transition: width 0.3s;
    z-index : 999;
    box-shadow: 0 1px 20px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.05);
  }

  .main-menu.is-collapsed {
    width:85px;
  }

  .main-menu.is-expanded {
    width:260px;
  }

  .scroll-area {
    position : relative;
    margin : auto;
    max-height : calc(100vh - 120px);
  }

  // DARK MODE ADJUSTMENTS

  .is-darkmode .main-menu { background:#222222; }
  .is-lightmode .main-menu { background:#ffffff; }

</style>
