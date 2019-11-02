<template>

  <!-- Content of Main Menu -->
  <!-- Includes all groups and nav buttons -->

  <div class="main-menu-content">

    <!-- Button Groups -->
    <!-- All nav buttons will be inserted into slot of group component -->
    <main-menu-button-group
      v-for="(group, groupindex) in groups"
      :group="group"
      :key="groupindex"
      :collapsed="collapsed"
      >

      <!-- SLOT -->
      <main-menu-button
        v-for="(button, buttonindex) in group.links"
        :button="button"
        :badge="badges[button.name] ? badges[button.name] : null"
        :key="buttonindex"
        :collapsed="collapsed"
        />
      <!-- SLOT : END -->

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
      badges : Object,
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
