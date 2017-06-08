<template>
  <div>
    <header class="header">
      <a v-if="routerArr.indexOf($route.name) !== -1" class="header-return" @click="backPage"><i class="fa fa-angle-left"></i>&nbsp;返回</a>
      <a class="header-logo" @click="toHome(items)">
        <img src="../../../static/img/logo.png">
      </a>
      <a class="header-search" @click="toSearch(items)">
        <img src="../../../static/img/search.png">
      </a>
    </header>
    <div class="header-nav">
      <a v-for="(item, index) in items" :href="item.href" :class="[navLink, item.route.indexOf($route.name) !== -1 ? activeClass : '']">
        <span class="nav-txt">{{item.text}}</span>
      </a>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    data () {
      return {
        headerSearch: 'header-search',
        navLink: 'nav-link',
        activeClass: 'active',
        routerArr:['Show','List','Result','Tag'],
        items: [
          {
            text: '影视',
            route:['Home','List','Show','Tag'],
            href: '/#/home'
          },
          {
            text: '发现',
            route:['Search','Result'],
            href: '/#/search'
          },
          {
            text: '关于',
            route:['About'],
            href: '/#/about'
          }
        ]
      }
    },
    methods: {
      backPage:function () {
        this.$router.back(-1);
        this.$root.$emit('backPage')
      },
      toSearch: function (items) {
        this.$router.push({path: '/search'});
        this.$emit('toSearch', items)
      },
      toHome: function (items) {
        this.$router.push({path: '/home'});
        this.$emit('toHome', items)
      }
    }
  }
</script>

<style scoped>
  .header {
    width: 100%;
    height: 4.9rem;
    line-height: 4.9rem;
    background: #2ca2f9;
    border-bottom:1px solid rgba(255, 255, 255, 0.2) ;
    text-align: center;
    position: relative;
  }

  .header-logo {
    width: 16rem;
    height: 4.9rem;
    float: left;
  }

  .header-logo img {
    width: 12rem;
    vertical-align: middle;
  }

  .header-search {
    color: #fff;
    width: 4.9rem;
    height: 4.9rem;
    font-size: 2rem;
    position: absolute;
    right: 0;
    top: 0;
  }

  .header-search img {
    width: 2rem;
    vertical-align: middle;
  }

  .header-nav{
    width: 100%;
    height: 4rem;
    background: #2ca2f9;
  }

  .header-nav .nav-link{
    display: inline-block;
    width: 32%;
    font-size: 1.5rem;
    color: #fff;
    text-decoration: none;
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 1.1rem;
    margin-right: 1%;
  }

  .header-nav .nav-link:first-child{
    margin-left: 1%;
  }

  .active{
    background: url("../../../static/img/san.png")no-repeat;
    background-size: 1.25rem .625rem;
    background-position: 50% bottom ;
  }

  .header .header-return{
    float: left;
    color: #fff;
    text-decoration: none;
    width: 7rem;
    line-height: 4.9rem;
    font-size: 1.8rem;
    margin-right: 4.8rem;
  }

  .header .header-return i{
    font-size: 2.2rem;
  }
</style>
