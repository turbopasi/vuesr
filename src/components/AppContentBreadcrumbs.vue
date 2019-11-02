<template>
  <!-- App Content Breadcrumbs -->
  <div class="app-content-breadcrumbs" >
    <div class="inner">

      <!-- Title of the page -->
      <h1 class="title" v-if="showTitle" :class="{'has-breadcrumb' : showBreadcrumb}">{{ title }}</h1>

      <!-- Breadcrumb -->
      <p v-if="showBreadcrumb">
        <template v-for="(crumb, index) in breadcrumbList">
          <router-link :to="crumb.link" v-if="crumb.link">
            <span :class="[index == breadcrumbList.length - 1 ? 'last-crumb' : 'crumb']"> {{ crumb.name }} </span>
          </router-link>
          <span v-else :class="[index == breadcrumbList.length - 1 ? 'last-crumb' : 'crumb']"> {{ crumb.name }} </span>
          <span class="crumb-trenner" v-if="index < breadcrumbList.length - 1">&#187</span>
        </template>
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
    margin : 0px;
    height : 40px;
    display:flex;
    align-items: center;
    margin-right : 20px;
    padding-right: 20px;
    padding-bottom: 5px;
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

  .inner p span.crumb {
    cursor: pointer;
  }

  .inner p span.last-crumb, .inner p span.crumb-trenner {
    cursor: default;
  }

  .crumb-trenner {
    margin-right:7px;
    margin-left:5px;
  }

  .is-darkmode h1   { color:#C1C1C1; }
  .is-darkmode p    { color: white; }
  .is-darkmode p span { color : #888; }
  .is-darkmode p span.crumb:hover { color : white; text-decoration: underline; }
  .is-darkmode p span.last-crumb { color : white; }

  .is-lightmode h1  { color:#999999; }
  .is-lightmode p   { color: black; }
  .is-lightmode p span { color : #999; }
  .is-lightmode p span.crumb:hover { color : black; text-decoration: underline; }
  .is-lightmode p span.last-crumb { color : black; }

</style>
