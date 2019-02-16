<template>
  <div class="nav">

     <nav class="uk-navbar-container"uk-navbar>
   

        <div class="uk-navbar-left">
         <div>
          
        <ul class="uk-navbar-nav">
            <li><router-link to="/profile">  <svgicon icon = "chrome-logo" height="23" width = "30" color = "white">  </svgicon> </router-link> </li>
           
        </ul>

        </div>

      </div>


    
        
        <div class="uk-navbar-center">
    
        <div>
            <a class="uk-navbar-item uk-logo" href="#">{{brand}}</a>
        </div>

    


      </div>

      <div class="uk-navbar-right">
          <div>
          
        <ul class="uk-navbar-nav">
            <li><router-link to="/">  <svgicon icon = "notification" height="23" width = "30" color = "white">  </svgicon> </router-link> </li>
           
        </ul>

        </div>

    </div>
      

</nav>

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
  padding-left:20px;
  padding-right:20px;
  margin-right: auto;
  margin-left: auto;

}


</style>
