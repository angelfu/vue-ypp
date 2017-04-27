<template>
  <div class="loader" v-show="isShow">
    <p v-show="text">{{text}}</p>
  </div>
</template>

<script>
export default {
  name: 'loader',
  data () {
    return {
      isShow: false,
      text: ''
    }
  },
  methods: {
    open () {
      this.isShow = true
    },
    close () {
      this.isShow = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.loader {
    font-size: .24rem;
    position: fixed;
    left:50%;
    top:50%;
    margin: -.25rem 0 0 -.25rem;
    text-indent: -9999em;
    border-top: 3px solid rgba(0, 0, 0, 0.3);
    border-right: 3px solid rgba(0, 0, 0, 0.3);
    border-bottom: 3px solid rgba(0, 0, 0, 0.3);
    border-left: 3px solid #000;
    -webkit-animation: load .72s infinite linear;
    animation: load .72s infinite linear;
}
.loader,.loader:after {
  border-radius: 50%;
  width: .5rem;
  height: .5rem;
}

@-webkit-keyframes load {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
