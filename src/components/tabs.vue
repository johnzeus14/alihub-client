<template>
  <div class="uk-container uk-margin-large-bottom tabs" >
  	<vk-tabs align="center">
    <vk-tabs-item  icon = "list" title=""> <story-list> </story-list> </vk-tabs-item>
    <vk-tabs-item icon = "camera" title=""> </vk-tabs-item>
    <vk-tabs-item icon = "cart" title=""></vk-tabs-item>
    <vk-tabs-item icon = "comment" title=""></vk-tabs-item>
  </vk-tabs>
  </div>
</template>





<script>
import story  from '@/components/story.vue';

export default {
components:{
  'story-list':story,

},

data(){
  return{

  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

@import '../../node_modules/uikit/src/less/uikit.less';


@breakpoint-small: 100px;


</style>
