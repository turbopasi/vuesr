<template>
  <div class="main-menu-button-group">
    <p class="group-header">{{ group.name }}</p>

    <!-- vue slot for buttons -->
    <slot></slot>
    <!--  -->
    
  </div>
</template>

<script>

  export default {
    name : 'main-menu-button-group',
    props : {
      group : Object
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
    padding : 1rem 1rem 1rem 1.64rem;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    font-size:11px;
    color:rgba(0,0,0,0.7);
  }

</style>
