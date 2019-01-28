<template>
 
  <div>
  
        <vk-navbar class = "navigation">
      <vk-navbar-nav>
        <vk-navbar-logo>{{brand}}</vk-navbar-logo>
      </vk-navbar-nav>
       <vk-navbar-nav slot = "center" class = "right">
                
           
          <router-link to="/feed"><svgicon icon="compass" width="60" height="70" color="white"></svgicon></router-link>
          <router-link to="/"><svgicon icon="like" width="60" height="70" color="white"></svgicon></router-link>
          <router-link to="/"><svgicon icon="notification" width="60" height="70" color="white"></svgicon></router-link>
         <router-link to="/profile"><svgicon icon="user" width="60" height="70" color="white"></svgicon></router-link>


             
        </vk-navbar-nav>
      

        <vk-navbar-nav slot ="right">
           <form action="javascript:void(0)">
            <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>

            <input class="uk-input uk-form-width-medium uk-margin-small-right uk-margin-small-left uk-visible@m" type="text" placeholder="search">
            
          
          </form>
            <vk-navbar-nav slot="right"> 
              <vk-button size="medium"> Post</vk-button>
        </vk-navbar-nav>
            
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

// @import '../theme/theme.less';
</style>
