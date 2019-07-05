<template>
  <div class="main-menu-content">
    <div v-for="group in groups">
      {{ group.name }}
    </div>
  </div>
</template>

<script>

  export default {
    name: 'main-menu-content',
    props: {
      groups : Array
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
