<template>
  <div class="nav">
    <vk-navbar>
  <vk-navbar-nav>
    <vk-navbar-nav-item title="Active" active></vk-navbar-nav-item>

    <vk-navbar-nav-item title="Item"></vk-navbar-nav-item>
  </vk-navbar-nav>
</vk-navbar>
  </div>
</template>

<script>


export default {
  data(){
    return{
  
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

@import '../../node_modules/uikit/src/less/uikit.less';

@breakpoint-small: 150px;

@navbar-background:linear-gradient(45deg,#F32F8E,#B236D0);
@navbar-nav-item-color: white;
@navbar-item-color: white;
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





</style>
