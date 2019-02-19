<template>
 
  <div>
    <nav class="uk-navbar-container uk-margin" uk-navbar>
   

        <div class="uk-navbar-left">
          <div>
            <a class="uk-navbar-item uk-logo" href="#">

             <img src="/img/icons/alihubicon.png" alt="" height="25px" width="29px">|{{brand}}
          </a>
        </div>


        <div class="uk-inline">
        
        <input class="uk-input" placeholder="search">
        <svgicon icon = "search" class = "uk-form-icon uk-form-icon-flip uk-margin-top" height = "20" width = "30" color ="grey">   </svgicon>
          </div>
      </div>
        
      

      <div class="uk-navbar-right">
          <div>
          
        <ul class="uk-navbar-nav">
          <li> 

              <a href="">
               <div>
                        <svgicon icon = "notification" height="20" width="19" color = "#000000">  </svgicon>
                        <div class="uk-navbar-subtitle">feeds</div>
                    </div>
                </a>

          </li>
                 <li>

                  <a href="">
               <div>
                        <svgicon icon = "compasses" height="20" width="19" color = "#000000">  </svgicon>
                        <div class="uk-navbar-subtitle">discover</div>
                    </div>
                </a>


                  </li>
                  <li>
                    
                    <a href="">
               <div>
                        <svgicon icon = "notification" height="20" width="19" color = "#000000">  </svgicon>
                        <div class="uk-navbar-subtitle">notification</div>
                    </div>
                </a>

                  </li>
            <li><router-link to="/">  <svgicon icon = "notification" height="30" width = "19" color = "#000000">  </svgicon> </router-link>

             </li>
            <li class="uk-active"><router-link to="/profile"> <img src="/img/udem.jpg" height="5opx" width="50px" class="uk-border-circle"> </router-link></li>
            
            
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
