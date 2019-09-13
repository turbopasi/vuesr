<template>
  <!-- App Content Container -->
  <!-- Will automatically expand to fullwidth depending on main menu status -->

  <div class="app-content" :class="{ 'full-width': !mainMenuIsPinned }">

    <!-- App Content Top Bar -->
    <!-- Includes various hotlinks, account avatar, language, messages, ...  -->
    <!-- Can depend on current route -->
    <app-content-top-bar v-bind:mainMenuIsPinned="mainMenuIsPinned">

      <!-- Slot : Top Bar Hotlinks -->
      <top-bar-hotlinks
        v-bind:isDarkmode="isDarkmode"
        v-bind:hotlinks="hotlinks"
      />

      <!-- Slot : Darkmode toggle -->
      <div class="field">
        <b-switch v-model="isDarkmode" :rounded="false"></b-switch>
      </div>

    </app-content-top-bar>

    <!-- App Content Breadcrumbs -->
    <!-- Shows Title and Breadcrumbs of current active route -->
    <!-- Depends on route if shown or not -->
    <app-content-breadcrumbs />

    <!-- Sub Router View -->
    <router-view />
  </div>
</template>

<script>
import AppContentTopBar from "@/components/AppContentTopBar";
import TopBarHotlinks from "@/components/TopBarHotlinks";
import AppContentBreadcrumbs from "@/components/AppContentBreadcrumbs";

export default {
  name: "container-app-content",
  components: {
    AppContentTopBar,
    TopBarHotlinks,
    AppContentBreadcrumbs
  },
  props: {
    msg: String
  },
  data() {
    return {
      //temp
      account: {}
    };
  },
  computed: {
    mainMenuIsPinned() {
      return this.$store.state.mainmenu.isPinned;
    },
    hotlinks() {
      return this.$store.state.topbar.hotlinks;
    },
    isDarkmode: {
      get() {
        return this.$store.state.dashboard.isDarkmode;
      },
      set(newvalue) {
        this.$store.dispatch("dashboard/SET_DARK_MODE", newvalue);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.app-content {
  padding: 110px 30px;
  margin-left: 260px;
  box-sizing: border-box;
  min-height: 250px;
}

.app-content.full-width {
  margin-left: 85px;
}
</style>
