<template>
    <div>
      <div class="bg">
        <p class="title">{{title}}<a @click="showType(type)" class="t-right">更多<i class="fa fa-angle-right"></i></a></p>
        <ul>
          <li v-for="item in showData" @click="showMovie(item.id)">
            <img v-bind:src="item.images.medium">
            <p>{{item.title}}</p>
          </li>
        </ul>
      </div>
    </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    props: ['title','showData','type'],
    methods:{
      showMovie:function (str) {
        const path = '/show/' + str;
        this.$router.push({path: path});
        this.$root.$emit('showMovie',str);
      },
      showType:function (t) {
        const path = '/list/' + t;
        this.$router.push({path: path});
        this.$root.$emit('showType',t);
      },
    }
  }
</script>

<style scoped>
  .bg{
    width: 100%;
    min-height: 44rem;
    background: #fff;
    margin-top: 1rem;
    padding-top: 1rem;
    overflow: hidden;
  }
  .title{
    margin-left: 1rem;
    padding-left: 1rem;
    border-left: .3rem solid #ff5500;
    text-align: left;
    font-size: 1.6rem;
    font-weight: bold;
  }
  .title .t-right{
    float: right;
    margin-right: 1rem;
    font-weight: normal;
  }
  .title .t-right i{
    margin-left: .3rem;
    font-size: 2rem;
  }
  .bg ul {
    padding: 0 1rem 1rem;
    clear: both;
    overflow: hidden;
    zoom: 1;
  }
  .bg li {
    float: left;
    width: 33.3333%;
    min-height: 19rem;
    margin-top: 1.5rem;
  }
  .bg li img {
    width: 84.52%;
    height: 14rem;
  }
</style>
