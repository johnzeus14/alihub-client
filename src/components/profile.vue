<template>
  <div id="profile">
    <div class="uk-container uk-visible@sm">
      
      <div class ="uk-flex  uk-padding">
        <div class = "">
          <img src="img/salesman.jpg" class="uk-border-circle" height="200" width="200"/>

        </div>
        <div class="uk-margin-left">
          
          <article class="uk-article">
              <h1 class="uk-article-title"> Alihub</h1>
              
          </article>
        </div>
    </div>


    </div>
  </div>
</template>

<script>


export default {
  data(){
    return{
      brand:'Alihub',
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

@import '../../node_modules/uikit/src/less/uikit.less';

@breakpoint-small: 100px;

@global-margin: 150px;






</style>
