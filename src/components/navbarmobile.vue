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
      brand:'Alihub',
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
@navbar-nav-item-onclick-color:  black;
@navbar-toggle-color:  black;
@navbar-toggle-hover-color: black;
@navbar-nav-item-padding-horizontal: 10px;
@navbar-nav-item-font-size: auto;
@navbar-nav-item-height: 70px;


@logo-color:black;
@logo-hover-color:black;
@logo-font-family:'Montserrat Alternates', sans-serif;
@logo-font-size: auto;





</style>
