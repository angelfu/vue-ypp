import alert from './alert.vue'
export default {
  install: function (Vue, options) {
    const DEFAULTS = {
      title: '提示',
      text: ['']
    }
    let instance
    Vue.prototype.$alert = function (opts, fn) {
      if (instance) {
        instance.$el.remove()
      }
      const Alert = Vue.extend(alert)
      instance = new Alert({
        el: document.createElement('div')
      })
      opts = Object.assign({}, DEFAULTS, opts, options)
      for (let key in opts) {
        instance[key] = opts[key]
      }
      typeof fn === 'function' && instance.$on('submit', fn)
      document.body.appendChild(instance.$el)
      instance.open()
      return instance
    }
  }
}
