<template>
 
  <div >
    <profile-desktop class = "uk-visible@l"> </profile-desktop>

    <profile-mobile class= "uk-hidden@l"> </profile-mobile>
  
     
  </div>
</template>


  
<script>
import profile_d from '@/components/desktop/profile.vue'
import profile_m from '@/components/mobile/profile.vue'

export default {
  components:{
    'profile-desktop':profile_d,
    'profile-mobile':profile_m

  },
  data(){
    return{
      
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

// @import '../theme/theme.less';
</style>
