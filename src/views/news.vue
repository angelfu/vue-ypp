<template>
  <article class="page" :class="{'show': isReady}">
    <top-head :isHide="false" :title="title"></top-head>
    <main class="g-main news">
      <div class="m-news-blk">
        <ul class="news-list">
          <li class="news-list__item" v-for="item in newsList">
            <router-link :to="'/news-detail/' + item.id">
              <h5>{{item.title}}</h5>
              <div class="content">
                <img :src="item.back_img" alt="">
                <div class="text">
                  <p>{{item.info.replace(/[&|nbsp;]/ig, '')}}</p>
                  <div class="date">
                    <span>{{item.postdate}}</span>
                  </div>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </main>
    <footer class="g-footer">
      <div class="copyright">
        <p>www.yupaopao.cn 2014-2017©All Rights Reserved.</p>
        <p>上海鱼泡泡信息科技有限公司 版权所有</p>
      </div>
    </footer>
  </article>
</template>

<script>
import topHead from '@/components/top-head'

export default {
  name: 'news',
  components: {
    topHead
  },
  data () {
    return {
      title: '动态',
      isReady: true,
      newsList: []
    }
  },
  mounted () {
    let self = this
    self.$loader.open()
    self.$axios.post(self.$baseUrl + '/getNewsList', {page: 1})
    .then(res => {
      if (res.data.code === 200) {
        self.newsList = res.data.result
      } else {
        self.$alert({text: ['网络错误']})
      }
      self.$loader.close()
    })
    .catch(() => {
      self.$alert({text: ['网络错误']})
      self.$loader.close()
    })
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
