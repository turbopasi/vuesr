<template>
  <div class="main-menu-button">
    <router-link :to="button.path">
      <div class="button-icon">
        <i :class=" 'remixicon-' + button.icon " class="ri-lg" ></i>
      </div>
      <div class="button-text" v-if="!collapsed">
        <span>{{ button.name }}</span>
      </div>
      <div class="button-badge" :class="button.badgeClass" v-if="button.badge && !collapsed">
        <p>{{ button.badge }}</p>
      </div>
      <div class="button-badge-indicator" :class="button.badgeClass" v-if="button.badge && collapsed">
        <p></p>
      </div>
    </router-link>
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
    text-decoration: none;
  }

  .main-menu-button a.router-link-active {
    border-radius: 5px;
    background: rgba(67,61,255,1);
    background: -moz-linear-gradient(left, rgba(67,61,255,1) 0%, rgba(155,89,255,1) 100%);
    background: -webkit-gradient(left top, right top, color-stop(0%, rgba(67,61,255,1)), color-stop(100%, rgba(155,89,255,1)));
    background: -webkit-linear-gradient(left, rgba(67,61,255,1) 0%, rgba(155,89,255,1) 100%);
    background: -o-linear-gradient(left, rgba(67,61,255,1) 0%, rgba(155,89,255,1) 100%);
    background: -ms-linear-gradient(left, rgba(67,61,255,1) 0%, rgba(155,89,255,1) 100%);
    background: linear-gradient(to right, rgba(67,61,255,1) 0%, rgba(155,89,255,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#433dff', endColorstr='#9b59ff', GradientType=1 );
  }

  .main-menu-button:hover .button-text {
    transform: translateX(5px);
  }

  .main-menu-button:hover .button-icon {
    transform: translateX(5px);
  }

  .main-menu-button a:active  { color : inherit; }
  .main-menu-button a:active  { color : inherit; }
  .main-menu-button a:visited { color : inherit; }
  .main-menu-button a:visited { color : inherit; }
  
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
    text-decoration: none;
  }

  .button-badge {
    font-size:12px;
    border-radius: 15px;
    padding:1px 8px 0 7px;
    letter-spacing: normal;
    font-weight: normal;
    text-align: center;
  }

  .is-collapsed .button-badge-indicator {
    width: 8px;
  }

  .is-expanded .button-badge-indicator {
    width: 0px;
  }

  .button-badge-indicator {
    height:3px;
    background:white;
    position:absolute;
    right:0px;
    margin-top:0px;
  }

  // DARK MODE ADJUSTMENT

  .is-darkmode .button-icon {
    color:#E1E1E1;
  }

  .is-darkmode .button-text {
    color:#E1E1E1;
  }

  .main-menu-button a.router-link-active .button-text {
    color : white;
  }

  .main-menu-button a.router-link-active .button-icon {
    color : white;
  }

</style>
