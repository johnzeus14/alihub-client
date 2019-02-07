<template>
 
  <div>
    <nav class="uk-navbar-container uk-margin" uk-navbar>
   

        <div class="uk-navbar-left">
          <div>
            <a class="uk-navbar-item uk-logo" href="#">{{brand}}</a>
        </div>


        <div class="uk-inline">
        
        <input class="uk-input">
        <svgicon icon = "search" class = "uk-form-icon uk-form-icon-flip" height = "30" width = "30" color ="grey">   </svgicon>
          </div>
      </div>
        
        <div class="uk-navbar-center">
          <div>
            <ul class="uk-navbar-nav">
                <li> <router-link to = "/"> Newsfeeds  </router-link></li>
                 <li><router-link to ="/profile">  profile </router-link> </li>
                  <li><a href="#">profile</a></li>
            </ul>
        </div>


      </div>

      <div class="uk-navbar-right">
          <div>
            

          
        <ul class="uk-navbar-nav">
            <li><router-link to="/">  <svgicon icon = "notification" height="30" width = "19" color = "white">  </svgicon> </router-link> </li>
            <li class="uk-active"><a href="#">Active</a></li>
            <li class="uk-active"><a href="#">Active</a></li>
            
        </ul>

        </div>

    </div>
      

</nav>


   
  
  
  </div>
</template>


  
<script>

import {mapActions} from 'vuex';


export default {
  data(){
    return{
      brand:'Alihub.me',
    }
  },
methods :{

},
 

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

// @import '../theme/theme.less';
</style>
