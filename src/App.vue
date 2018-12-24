<template>
  <div id="app">
   <navbar-d class = "uk-visible@l"> </navbar-d>
   <navbar-m class= "uk-hidden@l"> </navbar-m>
    <router-view/>
  </div>
</template>


<script >
import navbardesktop  from '@/components/navbardesktop.vue';
import navbarmobile from '@/components/navbarmobile.vue';
import { mapGetters } from 'vuex';
export default {

components:{
	'navbar-d':navbardesktop,
	'navbar-m':navbarmobile,
},
computed: mapGetters('auth', [
    'isAuthenticated',
  ]),

}


</script>


<style lang="less" scoped>


@import '../node_modules/uikit/src/less/uikit.less';


@breakpoint-large: 1200px;

</style>
