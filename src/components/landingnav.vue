<template>
  <div class="nav">
     <vk-navbar >
      <vk-navbar-nav>
        <vk-navbar-logo>{{brand}}</vk-navbar-logo>
      </vk-navbar-nav>

      <vk-navbar-nav slot="right"> 
              <vk-button size="small">Get Started</vk-button>
      </vk-navbar-nav>
       
        
    </vk-navbar>
  </div>
</template>

<script>


export default {
  data(){
    return{
  
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

@import '../../node_modules/uikit/src/less/uikit.less';

@breakpoint-small: 150px;

@navbar-background:white;
@navbar-nav-item-color: black;
@navbar-item-color: black;
@navbar-nav-item-active-color: black;
@navbar-nav-item-hover-color:  black;
@navbar-nav-item-onclick-color:  white;
@navbar-toggle-color:  white;
@navbar-toggle-hover-color: white;
@navbar-nav-item-padding-horizontal: 15px;
@navbar-nav-item-font-size: auto;
@navbar-nav-item-height: 70px;


@logo-color:white;
@logo-hover-color:white;
@logo-font-family:'Montserrat Alternates', sans-serif;
@logo-font-size: auto;





</style>
