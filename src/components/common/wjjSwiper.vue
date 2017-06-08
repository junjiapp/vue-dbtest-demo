<template>
    <div>
      <swiper :options="swiperOption" ref="mySwiperA">
        <!-- 幻灯内容 -->
        <swiper-slide v-for="item in slideInfo">
          <img :src="item.avatars.medium">
          <p>{{item.name}}</p>
        </swiper-slide>
        <!-- 点点 -->
        <!--<div class="swiper-pagination" slot="pagination"></div>-->
      </swiper>
    </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    props:['slideInfo'],
    data(){
      return {
        swiperOption: {
          slidesPerView : 3.3,
          slidesPerGroup : 1
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiperA.swiper
      }
    }
  }
</script>

<style scoped>
  .swiper-slide{
    text-align: center;
    height: 12rem;
  }
  .swiper-slide img{
    width: 7rem;
    height: 10rem;
  }
</style>
