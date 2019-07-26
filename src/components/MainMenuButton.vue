<template>
  <div class="main-menu-button">
    <a>
      <div class="button-icon">
        <component :is="'star-icon'" class="icon-gray" />
      </div>
      <div class="button-text">
        <span>{{ button.name }}</span>
      </div>
      <div class="button-badge" v-if="button.badge">
        <span>{{ button.badge }}</span>
      </div>
    </a>
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

  .main-menu-button {
    padding : 0 15px;
    color:rgba(0,0,0,0.6);
    letter-spacing: 0.08rem;
    font-weight: 100;
  }

  .main-menu-button a {
    padding : 10px 15px;
    display : block;
    text-overflow: ellipsis;
    overflow: hidden;
    display: flex;
    align-items: center;
    line-height: 1.45;
  }

  .button-icon {
    margin-right:1rem;
    display:flex;
    align-items: center;
  }

  .button-text {
    display:flex;
    align-items: center;
    padding-top:3px;
    flex:1;
  }

  .button-badge {
    font-size:12px;
    background:salmon;
    border-radius: 15px;
    padding:1px 7px;
    letter-spacing: normal;
    font-weight: normal;
    color:white;
  }

</style>
