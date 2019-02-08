<template>
  <div class="footer">

    
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
