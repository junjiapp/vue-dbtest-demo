<template>
    <div>
      <section v-if="loading">
        <loading></loading>
      </section>
      <section v-else>
        <section class="title-info">
          <div class="left">
            <img class="posters" :src="movieInfo.images.large" :alt="movieInfo.alt">
          </div>
          <div class="right">
            <h2>{{movieInfo.title}}</h2>
            <p>评分：<em>{{movieInfo.rating.average}}</em> ({{movieInfo.collect_count}}人评分)</p>
            <p>年份：{{movieInfo.year}}</p>
            <p>片长：{{movieInfo.durations}}</p>
            <p>类型：{{movieInfo.genres.join(', ')}}</p>
            <p v-for="item in movieInfo.countries">地区：{{item}}</p>
          </div>
        </section>
        <section class="info">
          <div class="row">
            <div class="info-btn">{{movieInfo.wish_count}}人想看</div>
            <div class="info-btn">{{movieInfo.collect_count}}人看过</div>
          </div>
          <div class="summary"><span>影片简介：</span>{{movieInfo.summary}}</div>
          <div v-if="movieInfo.casts.length == 0"></div>
          <div class="people" v-else>
            <p class="p-title">领衔主演：</p>
            <wjj-swiper :slideInfo="movieInfo.casts"></wjj-swiper>
          </div>
          <div class="director">
            <p class="d-title">导演信息：</p>
            <div class="d-img" v-for="item in movieInfo.directors">
              <div  v-if="item.avatars == null" class="d-img-border">无导演照片</div>
              <img v-else :src="item.avatars.medium" alt="item.alt">
              <p class="d-name">{{item.name}}</p>
            </div>
          </div>
        </section>
      </section>
    </div>
</template>

<script type='text/ecmascript-6'>
  import axios from 'axios'
  import wjjSwiper from '../common/wjjSwiper.vue'
  import loading from '../common/wjjLoading.vue'
  export default{
    data (){
      return{
        loading: true,
        movieInfo: {
          "rating": {
            "max": "",
            "average": "",
            "stars": "",
            "min": ""
          },
          "reviews_count": "",
          "wish_count": "",
          "douban_site": "",
          "year": "",
          "images": {
            "small": "",
            "large": "",
            "medium": ""
          },
          "alt": "",
          "id": "",
          "mobile_url": "",
          "title": "",
          "do_count": "",
          "share_url": "",
          "seasons_count": "",
          "schedule_url": "",
          "episodes_count": "",
          "countries": [
            ""
          ],
          "genres": [],
          "collect_count": "",
          "casts": {
            "alt": "",
            "avatars": {
              "small": "",
              "large": "",
              "medium": ""
            },
            "name": "",
            "id": ""
          },
          "current_season": "",
          "original_title": "",
          "summary": "",
          "subtype": "",
          "directors": [
            {
              "alt": "",
              "avatars": {
                "small": "",
                "large": "",
                "medium": ""
              },
              "name": "",
              "id": ""
            }
          ],
          "comments_count": "",
          "ratings_count": "",
          "aka": []
        }
      }
    },
    components:{
      wjjSwiper,loading
    },
    mounted: function () {
      this.$nextTick(function () {
        const that = this;
        const url = '/api/movie/subject/' + this.$route.params.id;
        axios.get(url)
          .then(function (res) {
            that.movieInfo = res.data;
            that.loading = false;
             console.log(res.data)
          })
          .catch(function (res) {
            console.log(res)
          })
      })
    }
  }
</script>

<style scoped>
  .title-info{
    width: 100%;
    min-height: 15rem;
    margin-top: 1rem;
    padding-top: 1rem;
    padding-bottom: 2rem;
    background: #fbfbfb;
  }
  .left{
    float: left;
    width: 14rem;
    text-align: center;
  }
  .left .posters{
    margin: auto;
    width: 10rem;
    height: auto;
    border: .2rem solid #fefefe;
  }
  .right{
    text-align: left;
  }
  .right h2{
    margin:0 0 .5rem;
    text-align: left;
  }
  .right em{
    color: #ff5500;
    margin-right: 1rem;
  }
  .info{
    width: 100%;
    min-height: 10rem;
    background: #f2f2f2;
    text-align: left;
    padding: 2rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .info .row{
    width: 33.5rem;
    height: 5rem;
  }
  .info .row .info-btn{
    float: left;
    width: 10rem;
    height: 3rem;
    margin-left: 3.3rem;
    margin-right: 3.3rem;
    line-height: 3rem;
    text-align: center;
    color: white;
    background-color: #ff5500;
    -webkit-border-radius: .5rem;
    -moz-border-radius: .5rem;
    border-radius: .5rem;
  }
  .info .summary span,
  .info .people .p-title,
  .info .director .d-title{
    font-weight: bold;
  }
  .info .people,
  .info .director{
    margin-top: 2rem;
  }
  .info .people .p-title,
  .info .director .d-title{
    margin-bottom: 1rem;
  }
  .info .director .d-img{
    float: left;
    text-align: center;
    width: 10.15rem;
    margin-right: 1rem;
  }
  .info .d-img-border{
    width: 6.8rem;
    height: 9.8rem;
    border: 0.1rem solid #999;
    margin: auto;
  }
  .info .director img{
    width: 7rem;
    height: 10rem;
  }
  .info .director{
    clear: both;
    overflow: hidden;
  }
</style>
