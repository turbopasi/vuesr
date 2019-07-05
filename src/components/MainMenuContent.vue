<template>
  <div class="main-menu-content">

    <!-- Button Groups -->
    <main-menu-button-group
      v-for="(group, groupindex) in groups"
      :group="group"
      :key="groupindex"
      >
      <!-- Buttons -->
      <main-menu-button
        v-for="(button, buttonindex) in group.links"
        :button="button"
        :key="buttonindex"
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
      groups : Array
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

</style>
