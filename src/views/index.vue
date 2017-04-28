<template>
  <article class="page" :class="{'show': isReady}">
    <top-head :isHide="index !== 0"></top-head>
    <main class="g-main index">
      <div class="m-scroll" :style="{height: pageHeight + 'px'}">
        <ul class="scroll-list trans" :style="{transform: 'translateY(-' + index * pageHeight + 'px)'}">
          <li class="scroll-list__item p1" :style="{height: pageHeight + 'px'}">
            <div class="title hasnav">
              <h2>上鱼泡泡，约到想约的人</h2>
              <p>- 超过400万用户使用的约玩APP -</p>
              <a href="/mdownload" class="btn">立即下载</a>
            </div>
          </li>
          <li class="scroll-list__item p2" :style="{height: pageHeight + 'px'}">
            <div class="title">
              <h2>语音交友</h2>
              <p>倾听你，温暖你，随时随地陪你语音聊天，你没听过的好声音都在这里</p>
              <div class="cat-list">
                <span class="cat-icon"><img src="../assets/images/m-icon-voice.png" alt=""></span>
                <span class="cat-icon"><img src="../assets/images/m-icon-wake.png" alt=""></span>
                <span class="cat-icon"><img src="../assets/images/m-icon-chat.png" alt=""></span>
              </div>
            </div>
          </li>
          <li class="scroll-list__item p3" :style="{height: pageHeight + 'px'}">
            <div class="title">
              <h2>游戏陪玩</h2>
              <p>国服前10美女游神，线上陪练轻松上分，线下网吧开黑虐菜又虐狗</p>
              <div class="cat-list">
                <span class="cat-icon"><img src="../assets/images/m-icon-lol.png" alt=""></span>
                <span class="cat-icon"><img src="../assets/images/m-icon-king.png" alt=""></span>
                <span class="cat-icon"><img src="../assets/images/m-icon-ow.png" alt=""></span>
              </div>
            </div>
          </li>
          <li class="scroll-list__item p4" :style="{height: pageHeight + 'px'}">
            <div class="title">
              <h2>一对一视频聊天</h2>
              <p>这一刻，颜值女神陪你聊天，属于两个人的私密时刻，感受面对面的眼神触电</p>
              <div class="cat-list">
                <span class="cat-icon"><img src="../assets/images/m-icon-face.png" alt=""></span>
                <span class="cat-icon"><img src="../assets/images/m-icon-sleep.png" alt=""></span>
                <span class="cat-icon"><img src="../assets/images/m-icon-live.png" alt=""></span>
              </div>
            </div>
          </li>
          <li class="scroll-list__item download" :style="{height: pageHeight + 'px'}">
            <div class="title">
              <h2>上鱼泡泡，约到想约的人</h2>
              <p>- 超过400万用户使用的约玩APP -</p>
            </div>
            <div class="code">
              <img src="../assets/images/client.png" alt="">
            </div>
            <div class="download-bar">
              <a href="/mdownload"><img src="../assets/images/m-btn-ios.png" alt=""></a>
              <a href="/mdownload"><img src="../assets/images/m-btn-android.png" alt=""></a>
            </div>
            <div class="copyright">
              <p>www.yupaopao.cn 2014-2017©All Rights Reserved.</p>
              <p>上海鱼泡泡信息科技有限公司 版权所有</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="arrow animated infinite fadeInUp" :class="{'hide': index === scrollItemLength - 1}">
        <span></span>
      </div>
    </main>
    <footer class="g-footer">

    </footer>
  </article>
</template>

<script>
/* eslint-disable */
import touch from 'touchjs'
import topHead from '@/components/top-head'

export default {
  name: 'index',
  components: {
    topHead
  },
  data () {
    return {
      isReady: true,
      pageHeight: '667px',
      index: 0,
      scrollItemLength: 5,
      navShow: false
    }
  },
  mounted () {
    var self = this

    self.pageHeight = document.documentElement.clientHeight

    const preventDefault = (ev) => ev.preventDefault()

    const animateReady = () => {
      let isReady = true
      return (fn) => {
        if (isReady) {
          isReady = false
          typeof fn === 'function' && fn()
          setTimeout(() => {
            isReady = true
          }, 500)
        }
      }
    }
    const checkAnimateReady = animateReady()

    touch.on('.page', 'touchmove', preventDefault)

    touch.on('.page', 'swipeup', (ev) => {
      if (self.index < self.scrollItemLength - 1) {
        checkAnimateReady(() => self.index++)
      }
  	})

    touch.on('.page', 'swipedown', (ev) => {
      if (self.index > 0) {
        checkAnimateReady(() => self.index--)
      }
  	})


  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
