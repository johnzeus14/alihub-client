ho<template>
  <div id="app">
   <navbar-desktop class = "uk-visible@l"> </navbar-desktop>
   <navbar-mobile class= "uk-hidden@l"> </navbar-mobile>
    <router-view/>

    <footer-mobile class= "uk-hidden@l">  </footer-mobile>
  </div>
</template>


<script >
//navbar 
import navbar_d  from '@/components/desktop/navbar.vue'
import navbar_m from '@/components/mobile/navbar.vue'


//footer
import footer_m from '@/components/desktop/footer.vue'
import footer_d from '@/components/mobile/footer.vue'

//vuex imports
import { mapGetters } from 'vuex';
export default {

components:{
	'navbar-desktop':navbar_d,
	'navbar-mobile':navbar_m,
	'footer-mobile':footer_m
},
computed: mapGetters('auth', [
    'isAuthenticated',
  ]),

}


</script>


<style lang="less" scoped>



@breakpoint-large: 1200px;


</style>
