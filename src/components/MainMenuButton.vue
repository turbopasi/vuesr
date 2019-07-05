<template>
  <div class="main-menu-button">
    {{ button.name }} {{ button.icon }}
  </div>
</template>

<script>

  export default {
    name: 'main-menu-button',
    props: {
      button: Object
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
