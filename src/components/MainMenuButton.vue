<template>

  <!-- Nav Button for Main Menu -->
  <!-- Includes Icon, Name and optional Pill -->
  <!-- Also renders based on collapse status of main menu -->

  <div class="main-menu-button">

    <router-link :to="button.path">

      <!-- Nav Link Icon -->
      <div class="button-icon">
        <b-icon :icon="button.icon" ></b-icon>
        <!-- <i :class=" 'remixicon-' + button.icon " class="ri-lg" ></i> -->
      </div>

      <!-- Nav Link Text -->
      <div class="button-text" v-if="!collapsed">
        <span>{{ button.name }}</span>
      </div>

      <!-- Notification Pill if Main Menu is Expanded -->
      <b-tag rounded class="button-badge" :type="button.badgeClass" v-if="button.badge && !collapsed">{{ button.badge }}</b-tag>

      <!-- Notificion Indicator if Main Menu is Collapsed -->
      <div class="button-badge-indicator has-background-link" v-if="button.badge && collapsed">
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
    }
  }

</script>

<style scoped lang="scss">

  .main-menu-button {
    padding : 0 15px;
  }

  .main-menu-button a {
    padding : 10px 17px;
    overflow: hidden;
    display: flex;
    align-items: center;
    line-height: 1.45;
    letter-spacing: 0.08rem;
    font-weight: 100;
  }

  .main-menu-button:hover .button-text {
    transform: translateX(5px);
  }

  .main-menu-button:hover .button-icon {
    transform: translateX(5px);
  }

  .button-icon {
    margin-right : 1rem;
    transition : all 0.2s;
  }

  .button-text {
    flex : 1;
    transition: all 0.2s;
  }

  .button-badge {
    font-size:12px;
    letter-spacing: normal;
    font-weight: normal;
  }

  .is-collapsed .button-badge-indicator {
    width: 8px;
  }

  .is-collapsed .main-menu-button {
    margin-bottom:10px;
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

  // ACTIVE NAV ITEM

  .main-menu-button a.router-link-active .button-text { color : white; }
  .main-menu-button a.router-link-active .button-icon { color : white; }
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

  // DARK MODE ADJUSTMENT

  .is-darkmode .button-icon { color:#E1E1E1; }
  .is-darkmode .button-text { color:#E1E1E1; }

  .is-lightmode .button-icon { color:#666666; }
  .is-lightmode .button-text { color:#111111; }

</style>
