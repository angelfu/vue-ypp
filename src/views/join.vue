<template>
  <article class="page" :class="{'show': isReady}">
    <top-head :isHide="false" :title="title" ref="head"></top-head>
    <main class="g-main about">
      <div class="tabs">
        <div class="tabs__head" :class="'tabs__head--' + tabData.length">
          <span class="tabs__btn" v-for="(item, index) in tabData" @click="curTab = index" :class="{'tabs__btn--cur': curTab === index}">{{item.itemName}}</span>
        </div>
        <div class="tabs__body">
          <div class="tabs__panel" v-for="(item, index) in tabData" :class="{'tabs__panel--cur': curTab === index}">
            <ul class="m-link-list">
              <li class="m-link-list__item" v-for="link in item.itemList">
                <router-link :to="'/join-detail/' + link.id">{{link.name}}</router-link>
              </li>
            </ul>
          </div>
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
  name: 'join',
  components: {
    topHead
  },
  data () {
    return {
      title: '加入我们',
      isReady: true,
      curTab: 0,
      tabData: [
        {
          itemName: '技术类',
          itemList: [
            {
              id: '11',
              name: '高级java开发'
            },
            {
              id: '12',
              name: '高级Andriod开发'
            },
            {
              id: '13',
              name: '高级IOS开发'
            }
          ]
        },
        {
          itemName: '运营类',
          itemList: [
            {
              id: '21',
              name: '运营经理（线下游戏）'
            },
            {
              id: '22',
              name: '运营专员（线下游戏）'
            },
            {
              id: '23',
              name: '运营专员（线上游戏）'
            },
            {
              id: '24',
              name: '运营专员（线下娱乐）'
            },
            {
              id: '25',
              name: '客服专员'
            }
          ]
        },
        {
          itemName: '产品类',
          itemList: [
            {
              id: '31',
              name: '产品经理'
            },
            {
              id: '32',
              name: '产品专员'
            },
            {
              id: '33',
              name: '高级UI设计'
            }
          ]
        },
        {
          itemName: '推广类',
          itemList: [
            {
              id: '41',
              name: '活动策划'
            },
            {
              id: '42',
              name: '整合营销传播经理'
            }
          ]
        }
      ]
    }
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.$refs.head.close()
    })
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
