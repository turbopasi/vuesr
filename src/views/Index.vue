<template>
  <div class="index">
    <container-main-menu />
    <container-app-content />
  </div>
</template>

<script>

  // @ is an alias to /src
  import ContainerAppContent from '@/components/ContainerAppContent';
  import ContainerMainMenu   from '@/components/ContainerMainMenu';

  export default {
    name: 'index',
    components: {
      ContainerAppContent,
      ContainerMainMenu
    }
  }

</script>

<style lang="scss">

</style>
