<template>
  <article class="page" :class="{'show': isReady}">
    <top-head :isHide="false" :title="title"></top-head>
    <main class="g-main about">
      <div class="tabs">
        <div class="tabs__head tabs__head--2">
          <span class="tabs__btn" @click="curTab = 0" :class="{'tabs__btn--cur': curTab === 0}">鱼泡泡简介</span>
          <span class="tabs__btn" @click="curTab = 1" :class="{'tabs__btn--cur': curTab === 1}">联系我们</span>
        </div>
        <div class="tabs__body">
          <div class="tabs__panel" :class="{'tabs__panel--cur': curTab === 0}">
            <div class="m-article g-container">
              <h4>关于鱼泡泡</h4>
              <p>鱼泡泡APP是国内网咖的领跑者网鱼网咖自行研发设计的功能型APP。玩家下载安装鱼泡泡APP后，可以即时占座、不用等位，让网咖排队彻底成为历史。网鱼网咖4.0门店不用安装专用收款设备，顾客无需携带现金或银行卡，可完全享受在线充值、移动支付等便捷服务。通过鱼泡泡APP，玩家可以快速找到附近的游友，方便结识新的战友一同享受畅快的网鱼游戏体验。更可以筛选出自己心仪的游神，申请陪玩。资深玩家还可以通过鱼泡泡APP申请成为游神，陪他人游戏。鱼泡泡APP的众多实用、便捷的功能，充分凸显了网鱼网咖对玩家个性需求的精准把控和新潮大胆的创新能力。</p>
              <p>网鱼网咖自主研发的约玩神器“鱼泡泡” 是全国第一款O2O游戏社交软件，集游神陪玩、即时占座、附近个人、附近群组、在线充值等功能于一体，是网鱼网咖打造O2O线上线下一站式娱乐互动平台的核心产品。</p>
            </div>
          </div>
          <div class="tabs__panel" :class="{'tabs__panel--cur': curTab === 1}">
            <dl class="m-contact-list g-container">
              <dt class="u-icon icon-local"><h5>联系地址</h5></dt>
              <dd>
                <p>地址：上海市徐汇区漕河泾开发区古美路1528号总部2期C幢6楼</p>
                <p>邮编：200030</p>
              </dd>
              <dt class="u-icon icon-tel"><h5>客服热线</h5></dt>
              <dd>
                <p>电话：400-820-0525</p>
              </dd>
              <dt class="u-icon icon-join"><h5>商务合作热线</h5></dt>
              <dd>
                <p>联系人: Jerry</p>
                <p>电话: 021-64080700-363</p>
              </dd>
              <dt class="u-icon icon-recruit"><h5>招聘咨询</h5></dt>
              <dd>
                <p>邮箱: shengmaoshu@yupaopao.cn</p>
                <p>电话: 021-64080700-367</p>
              </dd>
            </dl>
          </div>
        </div>
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
      title: '关于我们',
      isReady: true,
      curTab: 0
    }
  },
  mounted () {

  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
