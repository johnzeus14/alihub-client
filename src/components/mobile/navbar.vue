<template>
  <div class="nav">

    <vk-sticky top>
        
    <vk-navbar >
      
       <vk-navbar-nav slot="left"> 
            
              <svgicon icon="compass" width="18" height="90" color="#FFFFFF"></svgicon>
        </vk-navbar-nav>

        <vk-navbar-nav slot = center>
        <vk-navbar-logo >{{brand}}</vk-navbar-logo>
      </vk-navbar-nav>
        <vk-navbar-nav slot = "right">
              <svgicon icon="notification" width="18" height="90" color="#FFFFFF"></svgicon>
            
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




.hook-navbar-container() {
  padding-left:40px;
  padding-right:40px;
  margin-right: auto;
  margin-left: auto;

}


</style>
