# 鱼泡泡移动端官网

### 一个基于vue-cli的简单的官网

#### 说明
> build会生成到ypp目录下 动态列表和详情将调用ypp项目的接口

#### 结构(views)
- index 主页 其中使用了touch.js的滑动事件
- news 动态列表 使用了vue-infinite-scroll加载更多动态
- news-detail 动态详情 根据动态id请求接口获取详情内容
- join 招聘信息 招聘信息列表在data中
- join-detail 招聘详情 根据招聘id 遍历出存在data中对应招聘信息显示
- help 帮助 帮组信息存在data中
- about 关于我们 鱼泡泡的介绍

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
