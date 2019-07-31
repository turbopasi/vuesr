<template>
  <div class="main-menu-button">
    <a>
      <div class="button-icon">
        <i :class=" 'remixicon-' + button.icon " class="ri-lg" ></i>
      </div>
      <div class="button-text" v-if="!collapsed">
        <span>{{ button.name }}</span>
      </div>
      <div class="button-badge" :class="button.badgeClass" v-if="button.badge && !collapsed">
        <p>{{ button.badge }}</p>
      </div>
    </a>
  </div>
</template>

<script>

  export default {
    name : 'main-menu-button',
    props : {
      button : Object,
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

  .is-collapsed .main-menu-button {
    margin-bottom:10px;
  }

  .main-menu-button {
    padding : 0 15px;
    color:rgba(0,0,0,0.6);
    letter-spacing: 0.08rem;
    font-weight: 100;
    cursor: pointer;
  }

  .main-menu-button a {
    padding : 10px 17px;
    display : block;
    text-overflow: ellipsis;
    overflow: hidden;
    display: flex;
    align-items: center;
    line-height: 1.45;
  }

  .main-menu-button:hover .button-text {
    transform: translateX(5px);
  }

  .main-menu-button:hover .button-icon {
    transform: translateX(5px);
  }

  .button-icon {
    margin-right:1rem;
    display:flex;
    align-items: center;
    transition: all 0.2s;
  }

  .button-text {
    display:flex;
    align-items: center;
    padding-top:3px;
    flex:1;
    transition: all 0.2s;
  }

  .button-badge {
    font-size:12px;
    border-radius: 15px;
    padding:1px 8px 0 7px;
    letter-spacing: normal;
    font-weight: normal;
    text-align: center;
  }

</style>
