<template>
  <header class="g-header trans" :class="{'g-header--fade': isHide}">
    <h2>{{title}}</h2>
    <div class="nav-top">
      <span class="nav-top__btn" @click="navShow = true" v-show="!back"></span>
      <a href="https://webpay.yupaopao.cn/wappay/#/pay"  v-show="!back" class="diamond-btn">购买钻石</a>
      <a href="/" v-show="!title && !back"><h1 class="nav-top__logo">鱼泡泡</h1></a>
      <span class="nav-top__back" @click="$router.back()" v-show="back"></span>
    </div>
    <nav class="nav-list trans" :class="{'nav-list--cur': navShow}">
      <div class="nav-list__close tar">
        <span class="close-btn" @click="navShow = false"></span>
      </div>
      <ul>
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/news">动态</router-link></li>
        <li><router-link to="/about">关于我们</router-link></li>
        <li><router-link to="/join">加入我们</router-link></li>
        <li><router-link to="/help">帮助</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'top-head',
  props: ['isHide', 'title', 'back'],
  data () {
    return {
      navShow: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
