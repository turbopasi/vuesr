<template>
  <div class="main-menu-button-group">
    <p class="group-header" v-if="!collapsed">{{ group.name ? group.name : '' }}</p>
    <!-- vue slot for buttons -->
    <slot></slot>
    <!--  -->

  </div>
</template>

<script>

  export default {
    name : 'main-menu-button-group',
    props : {
      group : Object,
      collapsed : Boolean
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

  .group-header {
    padding : 0;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-size:11px;
    color:rgba(0,0,0,0.7);
    margin: calc(2.2rem - .2rem) 0 .8rem 2.2rem;
    white-space: nowrap;
  }

  .groupd-header-collapsed {
    padding : 0;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-size:11px;
    color:rgba(0,0,0,0.7);
    margin: calc(2.2rem - .2rem) 0 1.3rem 2.2rem;
  }

  // DARK MODE ADJUSTMENT

  .is-darkmode .group-header {
    color : rgba(255,255,255,0.5);
  }

</style>
