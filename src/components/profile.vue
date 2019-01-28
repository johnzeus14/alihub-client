<template>
 <div class="uk-container uk-padding">
    <div uk-grid>
          <div id="profile-image">
            
               <div slot="media-top">
                  <img src="/img/udem.jpg" height="150px"  width="150px" class="uk-border-circle" />

            </div>
          </div>
          <div id="profile-detail">   
           <h3> Alihub</h3>| <svgicon icon="correct" width="15" height="20" color="#00000"></svgicon>
          </div>
      
</div>

<div uk-lightbox>
    <a href="./img/salesman.jpg"> helllp</a>
</div>

    <tabs> </tabs>

 </div>


</template>

<script>
 import tabs  from '@/components/tabs.vue';

export default {


 components:{

  'tabs':tabs,
},
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

@base-body-background: red;




</style>
