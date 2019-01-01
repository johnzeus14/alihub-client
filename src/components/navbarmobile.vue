<template>
  <div class="nav">

    <vk-sticky top>
        
    <vk-navbar >
      
       <vk-navbar-nav slot="left"> 
            
              <svgicon icon="compass" width="20" height="80" color="#FFFFFF"></svgicon>
        </vk-navbar-nav>

        <vk-navbar-nav slot = center>
        <vk-navbar-logo >{{brand}}</vk-navbar-logo>
      </vk-navbar-nav>
        <vk-navbar-nav slot = "right">
              <svgicon icon="notification" width="20" height="80" color="#FFFFFF"></svgicon>
            
        </vk-navbar-nav>
       
       
        
    </vk-navbar>
  </vk-sticky>
  </div>
</template>

<script>


export default {
  data(){
    return{
      brand:'Alihub.me',
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

@import '../../node_modules/uikit/src/less/uikit.less';

@breakpoint-small: 150px;

@navbar-background:linear-gradient(45deg,#F32F8E,#B236D0);
@navbar-nav-item-color: white;
@navbar-item-color: white;
@navbar-nav-item-active-color: white;
@navbar-nav-item-hover-color:  white;
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


.hook-navbar-container() {
  padding-left:25px;
  padding-right:25px;
  margin-right: auto;
  margin-left: auto;

}


</style>
