<template>
  <div class="alert" v-show="isShow">
    <h5 v-show="title">{{title}}</h5>
    <div class="text" v-show="text">
      <p v-for="item in text">{{item}}</p>
    </div>
    <a href="javascript:;" class="alert-btn" @click="submit">确定</a>
  </div>
</template>

<script>
export default {
  name: 'alert',
  data () {
    return {
      isShow: false,
      title: '',
      text: ['']
    }
  },
  methods: {
    open () {
      this.isShow = true
      this.$shadow.open()
    },
    close () {
      this.isShow = false
      this.$shadow.close()
    },
    submit () {
      let self = this
      self.$emit('submit')
      self.close()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .alert {
    position: fixed;
    top:50%;
    left:50%;
    background: #fff;
    z-index: 100;
    text-align: center;
    width: 6rem;
    border-radius: .1rem;
    padding-top: .125rem;
    transform: translate(-50%, -50%);
    h5 {
      font-size: .40rem;
      padding-top: .25rem;
    }
    .text {
      font-size: .30rem;
      padding: .25rem 0 .45rem 0;
    }
    .alert-btn {
      border-top: 1px solid #e5e5e5;
      display: block;
      color: #1D9AFF;
      font-size: .3rem;
      height: .8rem;
      line-height: .8rem;
    }
  }
</style>
