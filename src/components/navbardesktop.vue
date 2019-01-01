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
                
           
               <svgicon icon="home" width="30" height="70" color="#FFFFFF"></svgicon>
              <svgicon icon="like" width="30" height="70" color="#FFFFFF"></svgicon>
              <svgicon icon="user" width="30" height="70" color="#FFFFFF"></svgicon>
        </vk-navbar-nav>
        <vk-navbar-nav slot="right"> 
              <vk-button size="small">Small button</vk-button>
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
@navbar-nav-item-padding-horizontal: 10px;
@navbar-nav-item-font-size: auto;
@navbar-nav-item-height: 70px;

@logo-color:white;
@logo-hover-color:white;
@logo-font-family:'Montserrat Alternates', sans-serif;
@logo-font-size: auto;



.hook-navbar-container() {
  padding-left:70px;
  padding-right:70px;
  margin-right: auto;
  margin-left: auto;

}
</style>
