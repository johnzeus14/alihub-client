<template>
  <div class="home">
  	<profile>  </profile>
  	<tabs> </tabs>
  </div>
</template>

<script>
import profile  from '@/components/profile.vue';
import tabs  from '@/components/tabs.vue';


export default {
components:{
	'profile':profile,
	'tabs':tabs,
},

data(){
  return{

  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
