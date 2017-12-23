<template>
  <div class='footer' :style="{background:bgColor}">
    <ul>
      <li><router-link to='/movie'>电影</router-link></li>
      <li><router-link to='/music'>音乐</router-link></li>
      <li><router-link to='/book'>书籍</router-link></li>
      <li><router-link to='/photo'>图片</router-link></li>
    </ul>
  </div>
</template>
<script>
    export default {
        props: ['bgColor'],
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>
<style>
  .footer{
    height    : 1rem;
    position  : fixed;
    bottom    : 0;
    width     : 100%;
  }
  .footer ul{
    display: flex;
  }
  .footer li{
    flex       : 1;
    text-align : center;
    line-height: 1rem;
  }
  .footer li a{
    color: #ccc;
  }
  .footer li a.router-link-active{
    color: #fff;
  }
</style>
