<template>
  <div id="app">
    <wjj-head v-if="$route.path !== '/'"></wjj-head>
    <transition name="wjj">
      <router-view class="wjj-view"></router-view>
    </transition>
  </div>
</template>

<script>
  import wjjHead from './components/common/wjjHead.vue'
  export default {
    name: 'app',
    components: {
      wjjHead
    }
  }
// -----------------rem 适配-------------------
// rem 原理：根据 html 的 fontSize 属性值为基准，其它所有的 rem 值，根据这个基准计算。
// 我们根据屏幕宽度用 js 动态修改了 html 的 fontSize 属性值，达到移动端适配的目的
// getBoundingClientRect() 方法返回一个矩形对象，包含六个属性 :top,bottom,left,right,width,height
// 这里基于宽 375px 的屏幕分成了 37.5 份，也就是 1rem = 10px
var html = document.documentElement;
var rem = html.getBoundingClientRect().width / 37.5;
html.style.fontSize = rem + 'px';
window.onresize = function () {
  var html = document.documentElement;
  var rem = html.getBoundingClientRect().width / 37.5;
  html.style.fontSize = rem + 'px';
}
</script>

<style>
  @import "assets/css/normalize.css";
  @import "assets/libs/font-awesome/css/font-awesome.min.css";
  body{
    background: #fbfbfb;
    font-family: '微软雅黑','Helvetica Neue', Arial, sans-serif;
    text-align: center;
    font-size: 1.4rem;
    color: #333;
  }
  .wjj-view{
    position: absolute;
    width:100%;
    transition: all .4s cubic-bezier(.55,0,.1,1);
  }
  .wjj-enter-active,.wjj-leave-active{
    opacity: 0;
    -webkit-transform: translate(50px, 0);
    transform: translate(50px, 0);
  }
  .wjj-enter,.wjj-leave-active{
    opacity: 0;
    -webkit-transform: translate(-50px, 0);
    transform: translate(-50px, 0);
  }
</style>
