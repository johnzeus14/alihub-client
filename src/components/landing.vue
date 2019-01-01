<template>
  <div class="nav">
     <vk-navbar >
      <vk-navbar-nav>
        <vk-navbar-logo>{{brand}}</vk-navbar-logo>
      </vk-navbar-nav>

        <vk-navbar-nav slot ="center">
           <form action="javascript:void(0)">
            <input class="uk-input uk-form-width-small uk-margin-small-right uk-margin-small-left uk-visible@m" type="text" placeholder="Input">
            <vk-button></vk-button>
          </form>
            
        </vk-navbar-nav>
        <vk-navbar-nav slot = "right" >
            <vk-navbar-nav-item icon="home" ></vk-navbar-nav-item>
            <vk-navbar-nav-item icon="heart" ></vk-navbar-nav-item>
             <vk-navbar-nav-item icon="user" ></vk-navbar-nav-item>
              <svgicon icon="search" width="25" height="20" color="#FFFFFF"></svgicon>
        </vk-navbar-nav>
        <vk-navbar-nav slot="right"> 
              <vk-button size="small">Small button</vk-button>
        </vk-navbar-nav>
       
        
    </vk-navbar>
  </div>
</template>

<script>
import 

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





</style>
