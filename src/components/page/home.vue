<template>
    <div>
      <section v-if="loading < 2">
      <loading></loading>
    </section>
      <section v-else>
        <wjj-home :title="title_1" :showData="showData_1" :type="type_1"></wjj-home>
        <wjj-home :title="title_2" :showData="showData_2" :type="type_2"></wjj-home>
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
  import axios from 'axios'
  import loading from '../common/wjjLoading.vue'
  import wjjHome from '../common/wjjHome.vue'
  export default{
    data () {
      return{
        city: '广州',
        count: '6',
        title_1:'',
        showData_1:'',
        title_2:'',
        showData_2:'',
        type_1:'in_theaters',
        type_2:'coming_soon',
        loading: 0,
        logo: require("../../../static/img/logo-blue.png"),
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
      var that = this;
      axios.get('/api/movie/in_theaters', {
        params: {
          city: that.city,
          count: that.count
        }
      })
      .then(function (res) {
        console.log(res.data);
        that.title_1 = res.data.title;
        that.showData_1 = res.data.subjects;
        that.loading = that.loading += 1;
      }).catch(function (res) {
        console.log(res);
      });
      axios.get('/api/movie/coming_soon', {
          params: {
            city: that.city,
            count: that.count
          }
        })
        .then(function (res) {
          console.log(res.data);
          that.title_2 = res.data.title;
          that.showData_2 = res.data.subjects;
          that.loading = that.loading += 1;
        }).catch(function (res) {
        console.log(res);
      });
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
