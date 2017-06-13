# dbmovie

> A Vue.js project

 本项目采用的是 vue + webpack + vue-router + axios完成，由于vuex还不是很熟练，在下个练手项目的时候再用上

 温馨提示：本项目是基于豆瓣电影api来完成，纯属练手项目，仅供参考

## Build Setup

> 安装依赖包

 npm install

> 启动项目 端口为9999

 npm run dev

>打包文件

 npm run build

## introduce

> 页面说明

 about.vue —— 说明页

 home.vue —— 首页展示页（展示正在热映、即将上映部分条目；展示十二种不同类型的列表供人点击）

 list.vue —— 展示豆瓣（正在热映、即将上映）全部电影条目

 search.vue —— 查询页面，同时在下面列出部分热门搜索电影

 result.vue —— 展示查询结果页

 show.vue —— 电影详细信息展示页，用vue-awesome-swiper做了个小的左右滑动，展示了主演、导演人物，电影剧情介绍以及一些关于电影的基本信息

 tag.vue —— 展示选择的十二种类型电影条目（类似于list.vue）