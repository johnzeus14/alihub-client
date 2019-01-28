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

@import '../theme/theme.less';




.hook-navbar-container() {
  padding-left:25px;
  padding-right:25px;
  margin-right: auto;
  margin-left: auto;

}


</style>
