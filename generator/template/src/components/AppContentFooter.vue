<template>
  <div class="app-content-footer">

    <div class="inner">

      <div class="group" v-for="(group, index) in footerGroups" :key="'footer-group-' + index">

        <div class="group-header" >
          {{ group.name }}
        </div>

        <div class="link" v-for="(link, index) in group.links">
          {{ link.name }}
        </div>

      </div>

    </div>


  </div>
</template>

<script>

  export default {
    name: 'app-content-footer',
    props: {
      footerGroups: Array
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

  .app-content-footer {
    margin-top:25px;
    border-top:1px solid;
    padding-top:15px;
  }

  .inner {
    display : flex;
  }

  .group {
    margin-right:40px;
  }

  .group-header {
    padding : 0;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-size:11px;
    color:rgba(0,0,0,0.7);
    white-space: nowrap;
    margin-bottom:10px;
  }

  .link {
    padding:0;
    margin:0;
    letter-spacing: 0.08rem;
    cursor: pointer;
  }

  // DARK / LIGHT MODE ADJUSTMENTS

  .is-darkmode .group-header { color:#777; }
  .is-darkmode .link         { color:#999; }
  .is-darkmode .link:hover   { color:#FFFFFF; }

  .is-lightmode .group-header { color:#999; }
  .is-lightmode .link         { color:#777; }
  .is-lightmode .link:hover   { color:#000000; }

</style>
