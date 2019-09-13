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
      <router-link :to="button.path">
        <div class="button-icon" :class="{ 'is-highlight': button.highlight }">
          <b-icon :icon="button.icon"></b-icon>
        </div>
      </router-link>

    </b-tooltip>

  </div>
</template>

<script>
export default {
  name: "top-bar-hotlinks",
  props: {
    hotlinks: Array,
    isDarkmode: Boolean
  }
};
</script>

<style scoped lang="scss">
.top-bar-hotlinks {
  display: flex;
  align-items: center;
  height: 50px;
  padding: 15px;
}

.top-bar-hotlinks .button-icon {
  padding: 5px;
  cursor: pointer;
}

.is-darkmode .top-bar-hotlinks .button-icon {
  color: #c1c1c1;
}
.is-darkmode .top-bar-hotlinks .is-highlight {
  color: orange;
}
.is-lightmode .top-bar-hotlinks .button-icon {
  color: #999999;
}
.is-lightmode .top-bar-hotlinks .is-highlight {
  color: orange;
}

.is-darkmode .top-bar-hotlinks .button-icon:hover {
  color: #ffffff;
}
.is-darkmode .top-bar-hotlinks .is-highlight:hover {
  color: orange;
}
.is-lightmode .top-bar-hotlinks .button-icon:hover {
  color: #000000;
}
.is-lightmode .top-bar-hotlinks .is-highlight:hover {
  color: orange;
}
</style>
