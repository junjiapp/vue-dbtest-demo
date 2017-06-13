<template>
  <div class="hello">
    <div class="login" v-if="goState">
      <img :src="logo" alt="">
      <input type="text" v-model="name" class="name" placeholder="留下你的大名" @blur="nameInfo">
      <p v-if="nameState" class="err">*请填上你的大名</p>
      <button class="btn" @click="login">点我点我点我</button>
    </div>
    <div class="sure" v-else>
      <p>尊敬的 {{name}} 用户，做好准备查看吧</p>
      <button class="s-btn" @click="yesGo">好的Go</button>
      <button class="s-btn" @click="noGo">不看了</button>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  name: 'hello',
  data () {
    return {
      nameState: false,
      goState: true,
      name: "",
      logo: require("@/assets/img/logo-black.png")
    }
  },
  methods:{
    login () {
      if (this.name !== ""){
        this.goState = false
      }else{
        this.nameState = true
      }
    },
    nameInfo () {
      if(this.name.length == 0){
        this.nameState = true
      }else{
        this.nameState = false
      }
    },
    yesGo () {
      const path = '/home';
      this.$router.push({path: path});
      this.$root.$emit('yesGo');
    },
    noGo () {
      this.goState = true;
      this.$root.$emit('noGo');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    height: 100%;
    background: #f5f5f5;
  }
  .login,.sure{
    width: 30rem;
    min-height: 14rem;
    background: #fff;
    margin: 20rem auto;
    padding: 2rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .login .name,
  .login .btn{
    height: 3rem;
    line-height: 3rem;
    outline: none;
    border: .1rem solid #999;
    margin: 0 auto 2rem;
    -webkit-border-radius: 1rem;
    -moz-border-radius: 1rem;
    border-radius: 1rem;
  }
  .login .name{
    width: 20rem;
    padding-left: 3rem;
    margin-top: 2rem;
  }
  .login .btn{
    width: 23.5rem;
    background: #020202;
    color: #fff;
    font-size: 1.6rem;
  }
  .login .err{
    text-align: left;
    margin-left: 3rem;
    margin-bottom: 1rem;
    margin-top: -2rem;
    color: red;
  }
  .sure .s-btn{
    width: 12rem;
    height: 3rem;
    line-height: 2.8rem;
    outline: none;
    border: .1rem solid #999;
    background: #020202;
    color: #fff;
    font-size: 1.6rem;
    margin-top: 2rem;
    -webkit-border-radius: 1rem;
    -moz-border-radius: 1rem;
    border-radius: 1rem;
  }
</style>
