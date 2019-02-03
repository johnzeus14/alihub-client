<template>
  <div class="nav">

    <vk-sticky bottom>
        
    <vk-navbar >
      

        <vk-navbar-nav slot = center>
         <router-link><svgicon icon="notification" width="30" height="80" color="black"></svgicon></router-link>
            <router-link> <svgicon icon="compass" width="30" height="80" color="black"></svgicon></router-link>
            
  
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

@import '../../theme/theme.less';

@breakpoint-small: 150px;

@navbar-background:white
@navbar-nav-item-color: black;
@navbar-item-color: black;
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


// .hook-navbar-container() {
//   padding-left:25px;
//   padding-right:25px;
//   margin-right: auto;
//   margin-left: auto;

// }
.uk-navbar-center{
  .uk-navbar-nav{
    
      svg{
        padding-left:40px;
  
    }
  }
}

</style>
