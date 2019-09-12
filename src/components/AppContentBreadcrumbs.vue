<template>
  <!-- App Content Breadcrumbs -->
  <div class="app-content-breadcrumbs" >
    <div class="inner">
      <h1 class="title" v-if="showTitle" :class="{'has-breadcrumb' : showBreadcrumb}">{{ title }}</h1>
      <p v-if="showBreadcrumb">
        <span v-for="(crumb, index) in breadcrumbList" :class="{'last-crumb' : index == breadcrumbList.length - 1 }">
          {{ crumb.name }} <span class="crumb-trenner" v-if="index < breadcrumbList.length - 1">&#187;</span>
        </span>
      </p>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'app-content-breadcrumbs',
    props: {
    },
    data() {
      return {
        title : "",
        showTitle : false,
        breadcrumbList : [],
        showBreadcrumb : false
      }
    },
    methods : {
      updateList() {
        this.breadcrumbList = this.$route.meta.breadcrumb;
        this.showBreadcrumb = this.$route.meta.showBreadcrumb;
        this.title = this.$route.meta.title;
        this.showTitle = this.$route.meta.showTitle;
      }
    },
    watch: {
      '$route' () {
        this.updateList();
      }
    },
    mounted() {
      this.updateList();
    }
  }

</script>

<style scoped lang="scss">

  .inner {
    display: flex;
  }

  .inner h1 {
    padding-right:20px;
    margin : 0px;
    height : 40px;
    display:flex;
    align-items: center;
    margin-right : 20px;
    font-weight : 300;
  }

  .inner h1.has-breadcrumb {
    border-right : 1px solid;
  }

  .inner p {
    margin : 0px;
    height : 40px;
    display : flex;
    align-items: center;
  }

  .inner p span {
    font-size:13px;
    text-transform: uppercase;
    font-weight:600;
    letter-spacing: 2px;
  }

  .crumb-trenner {
    margin-right:7px;
    margin-left:5px;
  }

  .is-darkmode h1   { color:#C1C1C1; }
  .is-darkmode p    { color: white; }
  .is-darkmode p span { color : #888; }
  .is-darkmode p span.last-crumb { color : white; }

  .is-lightmode h1  { color:#999999; }
  .is-lightmode p   { color: black; }
  .is-lightmode p span { color : #999; }
  .is-lightmode p span.last-crumb { color : black; }

</style>
