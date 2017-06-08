<template>
  <div>
    <section>
      <div class="head">
        <img :src="logo_left" alt="">
      </div>
      <div class="info">
        <h3>项目说明</h3>
        <p>温馨提示：本项目是基于豆瓣电影api来完成，纯属新手练手项目，仅供参考</p>
        <ul>
          <li>页面说明</li>
          <li>about.vue —— 说明页</li>
          <li>home.vue —— 首页展示页（展示正在热映、即将上映部分条目；展示十二种不同类型的列表供人点击）</li>
          <li>list.vue —— 展示豆瓣（正在热映、即将上映）全部电影条目</li>
          <li>search.vue —— 查询页面，同时在下面列出部分热门搜索电影</li>
          <li>result.vue —— 展示查询结果页</li>
          <li>show.vue —— 电影详细信息展示页，用vue-awesome-swiper做了个小的左右滑动，展示了主演、导演人物，电影剧情介绍以及一些关于电影的基本信息</li>
          <li>tag.vue —— 展示选择的十二种类型电影条目（类似于list.vue）</li>
        </ul>
        <ul>
          <li>组件说明</li>
          <li>wjjHead.vue —— 把头部封装成一个组件，点击对应的选项，调到相对应的路由</li>
          <li>wjjHome.vue —— 把首页展示的相同内容模板封装成一个组件</li>
          <li>wjjLoading —— 把页面加载时出现加载效果封装成一个组件</li>
          <li>wjjSwiper —— 把swiper插件封装成一个组件</li>
        </ul>
        <h3>LOGO展示</h3>
        <ul class="logo_show">
          <li v-for="item in logo"><img :src="item.logo_name" alt=""></li>
          <li><img :src="logo_info" alt=""></li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default{
    data () {
      return {
        logo:[
          {logo_name:require("../../../static/img/logo.png")},
          {logo_name:require("../../../static/img/logo-blue.png")},
          {logo_name:require("../../../static/img/logo-black.png")}
        ],
        logo_left:require("../../../static/img/logo-left.png"),
        logo_info:require("../../../static/img/logo-info.png")
      }
    }
  }
</script>

<style scoped>
  .head{
    width: 15rem;
    height: 15rem;
    line-height: 14.8rem;
    text-align: center;
    border: .1rem solid #999;
    overflow: hidden;
    margin: 2rem auto;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
  .head img{
    display: inline-block;
    vertical-align: middle;
    width: 12rem;
    height: 12rem;
  }
  .info{
    width: 100%;
    background: #fff  ;
    padding: 2rem;
    text-align: left;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .info h3{
    margin-bottom: 1rem;
    padding-left: 2rem;
    margin-top: 1rem;
    border-left: .3rem solid #ff5500;
  }
  .info ul{
    padding: 1rem 0;
  }
  .info ul li:first-child{
    font-weight: bold;
    margin-bottom: .5rem;
    font-size: 1.6rem;
  }
  .info .logo_show li{
    background: #00d6b2;
    width: 100%;
    height: 5rem;
    line-height: 5rem;
    text-align: center;
    margin-bottom: .5rem;
  }
  .info .logo_show li:last-child{
    height: 9rem;
    line-height: 9rem;
  }
</style>
