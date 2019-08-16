<template>

  <!-- Hotlink component to insert into top bar slot -->
  <div class="top-bar-hotlinks">

    <!-- Nav Link Icon -->
    <b-tooltip
      :label="button.name"
      position="is-bottom"
      v-for="(button, index) in hotlinks"
      :key="'hotlink-' + index">

      <div class="button-icon" >
        <b-icon :icon="button.icon" ></b-icon>
      </div>

    </b-tooltip>

  </div>
</template>

<script>

  export default {
    name: 'top-bar-hotlinks',
    props: {
      hotlinks: Array
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

  .top-bar-hotlinks {
    display: flex;
    align-items: center;
    height:50px;
    padding:15px;
  }

  .top-bar-hotlinks .button-icon {
    padding: 5px;
    cursor: pointer;
  }

  .is-darkmode .top-bar-hotlinks .button-icon  { color:#C1C1C1; }
  .is-lightmode .top-bar-hotlinks .button-icon { color:#999999; }

  .is-darkmode .top-bar-hotlinks .button-icon:hover  { color:#FFFFFF; }
  .is-lightmode .top-bar-hotlinks .button-icon:hover { color:#000000; }

</style>
