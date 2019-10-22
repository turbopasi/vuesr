<template>
  <div id="" class="">
    <h1>SUB ROUTE COMPONENT</h1>
    <!-- Generator: Adobe Illustrator 23.0.3, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <input type="text" name="" v-model="lower">
    <input type="text" name="" v-model="upper">
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    	 viewBox="0 0 1920 1080" style="enable-background:new 0 0 1920 1080;" xml:space="preserve">
      <rect class="st0" width="1920" height="1080"/>
      <text transform="matrix(1 0 0 1 50 138)" class="st1 st2">{{ lower }}</text>
      <text transform="matrix(1 0 0 1 50 220)" class="st3 st4">{{ upper }}</text>
    </svg>
  </div>
</template>

<script>

  // @ is an alias to /src

  export default {
    data() {
      return {
        lower : "test",
        upper : "wow"
      }
    },
    name: '',
    components: {

    }
  }

</script>

<style lang="scss">
  .st0{fill:#773D3D;}
  .st1{font-family:'Roboto';}
  .st2{font-size:115.1908px;}
  .st3{font-family:'Roboto';}
  .st4{font-size:82.3469px;}
</style>
