<template>
  <div class="nav">
    <vk-navbar >
      
       <vk-navbar-nav slot="left"> 
            <vk-navbar-nav-item icon="plus-circle" ></vk-navbar-nav-item>
        </vk-navbar-nav>

        <vk-navbar-nav slot = center>
        <vk-navbar-logo >{{brand}}</vk-navbar-logo>
      </vk-navbar-nav>
        <vk-navbar-nav slot = "right">
            <vk-navbar-nav-item icon="bell" ></vk-navbar-nav-item>
            
        </vk-navbar-nav>
       
       
        
    </vk-navbar>
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





</style>
