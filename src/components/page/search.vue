<template>
  <div>
    <section>
      <div class="search">
        <input type="text" placeholder="请输入你想搜索的电影" class="s-txt" v-model="txt">
        <button class="s-btn" @click="sendSearch">搜索</button>
      </div>
      <div class="maybe">
        <p class="m-title"><i class="fa fa-fire"></i>搜索 Hot</p>
        <div v-for="item in list" class="hot" @click="showMovie(item.id)">{{item.name}}</div>
      </div>
    </section>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    data () {
      return {
        show:false,
        loading: true,
        txt: "",
        list:[
          {"name":"神奇女侠" ,"id":"1578714"},
          {"name":"加勒比海盗5：死无对证" ,"id":"6311303"},
          {"name":"新木乃伊" ,"id":"20451290"},
          {"name":"摔跤吧！爸爸" ,"id":"26387939"},
          {"name":"拆弹专家" ,"id":"26748673"},
          {"name":"异形：契约" ,"id":"11803087"},
          {"name":"一条狗的使命" ,"id":"6873143"},
          {"name":"生化危机:终章" ,"id":"20471852"},
          {"name":"金刚狼3" ,"id":"25765735"},
          {"name":"乐高蝙蝠侠" ,"id":"26145033"}
        ]
      }
    },
    methods: {
      sendSearch:function () {
        if(this.txt.length == 0){
          alert('搜索框不能为空，请输出搜索内容');
        }else{
          this.$router.push({path: '/result', query: {name:this.txt} });
          this.txt = "";
        }
      },
      showMovie:function (str) {
        const path = '/show/' + str;
        this.$router.push({path: path});
        this.$root.$emit('showMovie',str);
      }
    }
  }
</script>

<style scoped>
  .search{
    padding-top: 1rem;
    margin-bottom: 1rem;
  }
  .s-txt{
    width: 27rem;
    height: 3rem;
    line-height: 3rem;
    padding-left: 1rem;
  }
  .s-btn{
    width: 5rem;
    height: 3.4rem;
    background: none;
    letter-spacing: .2rem;
  }
  .s-txt,.s-btn{
    outline: none;
    border: .1rem solid #999;
    -webkit-border-radius: 1rem;
    -moz-border-radius: 1rem;
    border-radius: 1rem;
  }
  .maybe{
    padding: 2rem;
  }
  .maybe .m-title{
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    text-align: left;
    padding-bottom: 1rem;
    border-bottom: .1rem solid #999;
  }
  .maybe .m-title i{
    margin-right: 1rem;
    color: red;
  }
  .maybe .hot{
    float: left;
    border: .1rem solid #999;
    padding: .5rem 2rem;
    margin-right: 1rem;
    margin-bottom: .5rem;
    -webkit-border-radius: 1rem;
    -moz-border-radius: 1rem;
    border-radius: 1rem;
  }
  .maybe .hot:nth-child(even){
    margin-left: 2rem;
  }
</style>
