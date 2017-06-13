<template>
  <div>
    <section v-if="loading">
      <loading></loading>
    </section>
    <section v-else>
      <div>
        <p class="s-title">{{result.title}},共有{{result.total}}条结果</p>
        <ul>
          <li v-for="item in result.subjects">
            <div class="list-left">
              <img :src="item.images.medium">
            </div>
            <div class="list-right">
              <div>
                <span class="list-title">{{item.title}}</span><em class="list-score">{{item.rating.average}}</em>
              </div>
              <p>时间：{{item.year}}</p>
              <p>类型：<span v-for="(type,num) in item.genres">{{num == 2 ? type : (type+' / ')}}</span></p>
              <p>主演：<span v-for="(people,num) in item.casts">{{num == 2 ? people.name : (people.name+' / ')}}</span></p>
              <div>
                <span class="list-btn list-details-btn" @click="showMovie(item.id)">查看详情</span>
                <span class="list-btn list-like-btn">{{item.collect_count}}人看过</span>
              </div>
            </div>
          </li>
        </ul>
        <p class="bottom-more" v-if="more" @click="getMore">点我加载更多小电影~~~</p>
        <p class="bottom-more" v-else>哎呀好气呀，没有更多了~~</p>
      </div>
    </section>
  </div>
</template>

<script type='text/ecmascript-6'>
  import { Api } from '@/api/index'
  import loading from '../common/wjjLoading.vue'
  export default{
    data () {
      return {
        loading:true,
        more:true,
        page: "1",
        count: "20",
        city: "广州",
        s_txt: "",
        result: {
          "count": "",
          "start": "",
          "total": "",
          "subjects": [
            {
              "rating": {
                "max": "",
                "average": "",
                "stars": "",
                "min": ""
              },
              "genres": [],
              "title": "",
              "casts": [
                {
                  "alt": "",
                  "avatars": {
                    "small": "",
                    "large": "",
                    "medium": ""
                  },
                  "name": "",
                  "id": ""
                }],
              "collect_count": "",
              "original_title": "",
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
                }],
              "year": "",
              "images": {
                "small": "",
                "large": "",
                "medium": ""
              },
              "alt": "",
              "id": ""
            }
          ],
          "title": ""
        }
      }
    },
    components:{
      loading
    },
    mounted:function () {
      this.$nextTick(function () {
        Api.Fn.search.result(this);
      });
    },
    methods:{
      showMovie:function (str) {
        const path = '/show/' + str;
        this.$router.push({path: path});
        this.$root.$emit('showMovie',str);
      },
      getMore:function () {
        Api.Fn.search.resultMore(this);
      }
    }
  }
</script>

<style scoped>
  .s-title{
    margin-top: 2rem;
  }
  /*---- list ----*/
  .title{
    margin-left: 1rem;
    padding-left: 1rem;
    border-left: .3rem solid #ff5500;
    text-align: left;
    font-size: 1.6rem;
    font-weight: bold;
  }
  li {
    min-height: 14rem;
    margin: 0 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-bottom: 0.1rem dashed #999;
  }
  li:last-child {
    border-bottom: 0;
  }
  li .list-left {
    float: left;
  }
  li .list-left img {
    width: 10rem;
    height: 14rem;
  }
  li .list-right {
    margin-left: 11rem;
    text-align: left;
    min-height: 12.5rem;
    position: relative;
  }
  li .list-right .list-title{
    display: block;
    font-weight: bold;
    font-size: 1.6rem;
    margin-right: 3rem;
    margin-bottom: .5rem;
  }
  li .list-right .list-score {
    position: absolute;
    right: 0;
    top: 0;
    color: #fdb612;
  }
  li .list-right p {
    width: 22.5rem;
    height: auto;
    display: inline-block;
    word-wrap: break-word;
    word-break: normal;
  }
  li .list-right .list-btn {
    display: inline-block;
    text-align: center;
    height: 2.4rem;
    line-height: 2.4rem;
    color: #fff;
    background: #fdb612;
    border: 0;
    outline: none;
    margin-top: 1rem;
    -webkit-border-radius: .3rem;
    -moz-border-radius: .3rem;
    border-radius: .3em;
  }
  li .list-right .list-details-btn {
    width: 7rem;
    margin-right: 0.5rem;
  }

  li .list-right .list-like-btn {
    width: 11rem;
  }
  .bottom-more{
    font-size: 1.6rem;
    padding-bottom: 2rem;
  }
</style>
