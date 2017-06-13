<template>
    <div>
      <section v-if="loading < 2">
      <loading></loading>
    </section>
      <section v-else>
        <wjj-home :title="in_theaters.title" :showData="in_theaters.showData" :type="in_theaters.type"></wjj-home>
        <wjj-home :title="coming_soon.title" :showData="coming_soon.showData" :type="coming_soon.type"></wjj-home>
        <div class="type">
          <h2 class="t-title">电影类型</h2>
          <ul>
            <li v-for="item in listType" @click="showTag(item.tag)">{{item.tag}}<span> > </span></li>
          </ul>
          <div class="cb"></div>
          <div class="last">
            <img :src="logo" alt="">
          </div>
        </div>
      </section>
    </div>
</template>

<script type='text/ecmascript-6'>
  import { Api } from '@/api/index'
  import loading from '../common/wjjLoading.vue'
  import wjjHome from '../common/wjjHome.vue'
  export default{
    data () {
      return{
        city: '广州',
        count: '6',
        in_theaters: {
          "type": "",
          "title": "",
          "showData": ""
        },
        coming_soon: {
          "type": "",
          "title": "",
          "showData": ""
        },
        loading: 0,
        logo: require("@/assets/img/logo-blue.png"),
        listType:[
          {tag:'喜剧'},
          {tag:'恐怖'},
          {tag:'爱情'},
          {tag:'悬疑'},
          {tag:'科幻'},
          {tag:'动作'},
          {tag:'治愈'},
          {tag:'文艺'},
          {tag:'成长'},
          {tag:'动画'},
          {tag:'华语'},
          {tag:'欧美'}
        ]
      }
    },
    components:{
      loading,wjjHome
    },
    mounted:function (){
      this.$nextTick(function () {
        Api.Fn.home.homeShow(this, 'in_theaters', this.in_theaters);
        Api.Fn.home.homeShow(this, 'coming_soon', this.coming_soon);
      })
    },
    methods:{
      showMovie:function (str) {
        const path = '/show/' + str;
        this.$router.push({path: path});
        this.$root.$emit('showMovie',str);
      },
      showTag:function (tag) {
        const path = '/tag/' + tag;
        this.$router.push({path: path});
        this.$root.$emit('showTag',tag);
      }
    }
  }
</script>

<style scoped>
 .type{
   width: 100%;
   background: #fff;
   margin-top: 1rem;
   padding: 1rem 2rem 3rem;
   text-align: left;
   clear: both;
   overflow: hidden;
   -webkit-box-sizing: border-box;
   -moz-box-sizing: border-box;
   box-sizing: border-box;
 }
  .type .t-title{
    margin-bottom: 1.5rem;
  }
  .type ul li {
    float: left;
    width: 14rem;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-bottom: .5rem;
    margin-right: .5rem;
    height: 4rem;
    line-height: 4rem;
    background: #f2f2f2;
  }
 .type ul li span {
   float: right;
 }
 .cb{
   clear: both;
 }
  .type .last img {
    display: block;
    width: 17.1rem;
    height: 4.7rem;
    margin: 3rem auto ;
  }
</style>
