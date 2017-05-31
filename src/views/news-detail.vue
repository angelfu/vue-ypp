<template>
  <article class="page" :class="{'show': isReady}">
    <top-head :isHide="false" :back="isBack"></top-head>
    <main class="g-main news-detail">
      <div class="m-news-content">
        <div class="title">
          <h3>{{newsDetail.title}}</h3>
          <span class="date">{{newsDetail.postdate}}</span>
        </div>
        <div class="content" v-html="newsDetail.content"></div>
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
  name: 'news-detail',
  components: {
    topHead
  },
  data () {
    return {
      isReady: true,
      isBack: true,
      newsDetail: {}
    }
  },
  mounted () {
    let self = this
    self.$loader.open()
    self.$axios.post(self.$baseUrl + '/getNewsDetail', {id: self.$route.params.id})
    .then(res => {
      if (res.data.status === 1) {
        self.newsDetail = res.data.data[0]
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
