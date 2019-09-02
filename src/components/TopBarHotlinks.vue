<template>

  <!-- Hotlink component to insert into top bar slot -->
  <div class="top-bar-hotlinks">

    <!-- Buefy Tooltip Wrapper for Icon Buttons -->
    <b-tooltip
      :label="button.name"
      :type="isDarkmode ? 'is-light' : 'is-dark'"
      :key="'hotlink-' + index"
      position="is-bottom"
      v-for="(button, index) in hotlinks">

      <!-- Icon Button -->
      <div class="button-icon" :class="{ 'is-highlight' : button.highlight }">
        <b-icon :icon="button.icon" ></b-icon>
      </div>

    </b-tooltip>

  </div>
</template>

<script>

  export default {
    name: 'top-bar-hotlinks',
    props: {
      hotlinks   : Array,
      isDarkmode : Boolean
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

  .is-darkmode .top-bar-hotlinks .button-icon    { color:#C1C1C1; }
  .is-darkmode .top-bar-hotlinks .is-highlight   { color:orange; }
  .is-lightmode .top-bar-hotlinks .button-icon   { color:#999999; }
  .is-lightmode .top-bar-hotlinks .is-highlight  { color:orange; }

  .is-darkmode .top-bar-hotlinks .button-icon:hover   { color:#FFFFFF; }
  .is-darkmode .top-bar-hotlinks .is-highlight:hover  { color:orange;  }
  .is-lightmode .top-bar-hotlinks .button-icon:hover  { color:#000000; }
  .is-lightmode .top-bar-hotlinks .is-highlight:hover { color:orange;  }

</style>
