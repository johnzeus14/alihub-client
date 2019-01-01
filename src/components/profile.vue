<template>
 <div class="uk-container uk-padding">
    <vk-grid gutter="collapse" class="uk-child-width-expand@m uk-text-center" matched = "true">
      <div id="profile-image">
        <vk-card hover = "true">
           <div slot="media-top">
              <img src="/img/unsplash.jpg" height="200" />

        </div>
   </vk-card>
      </div>
      <div>
        <vk-card class="uk-width-1-1@m" hover>
          <svgicon icon="correct" width="55" height="90" color="#00000"></svgicon>
          <vk-card-title>Alihub</vk-card-title>
          <p>Top leading Business Network</p>
        </vk-card>
      </div>
      
</vk-grid>

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
