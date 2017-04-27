import shadow from './shadow.vue'
export default {
  install: function (Vue, options) {
    const Shadow = Vue.extend(shadow)
    let instance = new Shadow({
      el: document.createElement('div')
    })
    document.body.appendChild(instance.$el)
    Vue.prototype.$shadow = {
      open (text) {
        instance.open()
      },
      close () {
        instance.close()
      }
    }
  }
}
