<template>
  <div class="main-menu-content">

    <!-- Button Groups -->
    <main-menu-button-group
      v-for="(group, groupindex) in groups"
      :group="group"
      :key="groupindex"
      :collapsed="collapsed"
      >
      <!-- Buttons -->
      <main-menu-button
        v-for="(button, buttonindex) in group.links"
        :button="button"
        :key="buttonindex"
        :collapsed="collapsed"
        />
    </main-menu-button-group>
    <!--  -->

  </div>
</template>

<script>

  import MainMenuButtonGroup from '@/components/MainMenuButtonGroup';
  import MainMenuButton from '@/components/MainMenuButton';

  export default {
    name: 'main-menu-content',
    props: {
      groups : Array,
      collapsed : Boolean
    },
    components : {
      MainMenuButtonGroup,
      MainMenuButton
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

  .is-collapsed .main-menu-content {
    margin-top:40px;
  }

</style>
