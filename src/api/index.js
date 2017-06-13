//引入 axios
import axios from 'axios'

// 数据交互api接口：立即执行函数 (function(){})()，为了不让变量污染全局
var Api = (() => {
  // 对外接口存储对象
  let Fn = window.Fn || {};
  //模块封装接口
  //获取列表
  Fn.list = {
    getList: (obj) => {
      axios.get('/api/movie/' + obj.$route.params.type, {
          params: {
            city: obj.city,
            count: obj.count,
            start: (obj.page - 1) * obj.count
          }
        })
        .then((res) => {
          console.log(res.data);
          obj.listData = res.data;
          obj.loading = false;
        }).catch((res) => {
        console.log(res);
      });
    },
    //加载更多
    getMore: (obj) => {
      axios.get('/api/movie/' + obj.$route.params.type, {
          params: {
            city: obj.city,
            count: obj.count,
            start: obj.page * obj.count
          }
        })
        .then((res) => {
          if (res.data && res.data.subjects.length) {
            obj.page++;
            obj.listData.subjects = obj.listData.subjects.concat(res.data.subjects);
          } else {
            obj.more = false
          }
          console.log(res.data);
        }).catch((res) => {
        console.log(res);
      });
    }
  };
  //影片详细信息
  Fn.show = {
    showInfo: (obj) => {
      axios.get('/api/movie/subject/' + obj.$route.params.id)
        .then(function (res) {
          obj.movieInfo = res.data;
          obj.loading = false;
          console.log(res.data);
        }).catch(function (res) {
        console.log(res);
      })
    }
  };
  //首页展示
  Fn.home = {
    homeShow: (obj, item, data) => {
      axios.get('/api/movie/' + item, {
          params: {
            city: obj.city,
            count: obj.count
          }
        })
        .then(function (res) {
          console.log(res.data);
          data.title = res.data.title;
          data.showData = res.data.subjects;
          data.type = item;
          obj.loading = obj.loading += 1;
        }).catch(function (res) {
        console.log(res);
      });
    },
    //展示类型
    tagShow: (obj) => {
      axios.get('/api/movie/search?tag='+ obj.$route.params.type,{
          params:{
            count: obj.count,
            start: (obj.page - 1) * obj.count
          }
        })
        .then(res => {
          obj.tagData = res.data;
          obj.loading = false;
          console.log(res);
        }).catch(res => {
        console.log(res);
      })
    },
    tagMore: (obj) => {
      axios.get('/api/movie/search?tag='+ obj.$route.params.type, {
          params: {
            count: obj.count,
            start: obj.page * obj.count
          }
        })
        .then((res) =>{
          if(res.data && res.data.subjects.length){
            obj.page ++;
            obj.tagData.subjects = obj.tagData.subjects.concat(res.data.subjects);
          }else{
            obj.more = false
          }
          console.log(res.data);
        }).catch((res) =>{
        console.log(res);
      });
    }
  };
  Fn.search = {
    result: (obj) => {
      axios.get('/api/movie/search?q='+ obj.$route.query.name,{
          params:{
            count: obj.count,
            start: (obj.page - 1) * obj.count
          }
        })
        .then(res => {
          obj.result = res.data;
          obj.loading = false;
          console.log(res);
        }).catch(res => {
        console.log(res);
      })
    },
    resultMore: (obj) => {
      axios.get('/api/movie/search?q='+ obj.s_txt, {
          params: {
            count: obj.count,
            start: obj.page * obj.count
          }
        })
        .then((res) =>{
          if(res.data && res.data.subjects.length){
            obj.page ++;
            obj.result.subjects = obj.result.subjects.concat(res.data.subjects);
          }else{
            obj.more = false
          }
          console.log(res.data);
        }).catch((res) =>{
        console.log(res);
      });
    }
  };
  return {
    Fn : Fn
  }
})();

//输出接口
export { Api }
