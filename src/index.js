/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

 module.exports = function (api, ctx) {
   api.extendQuasarConf((conf) => {
    conf.boot.push('axios.js')
    conf.boot.push('vuelidate.js')
    conf.boot.push('auth.js')

    const requiredComponents = [
      'QCard',
      'QCardSection',
      'QCardActions',
      'QInput',
      'QCheckbox',
      'QTable',
      'QTd',
      'QDialog',
      'QBanner',
      'QMenu'
    ]

    const requiredPlugins = [
      'Notify',
      'Dialog',
      'Cookies'
    ]

    const requiredDirectives = [
        'ClosePopup'
    ]

    requiredComponents.forEach((component) => {
      if (!conf.framework.components.includes(component)) {
        conf.framework.components.push(component)
      }
    })

    requiredPlugins.forEach((plugin) => {
      if (!conf.framework.plugins.includes(plugin)) {
        conf.framework.plugins.push(plugin)
      }
    })

    requiredDirectives.forEach((directive) => {
      if (!conf.framework.directives.includes(directive)) {
        conf.framework.directives.push(directive)
      }
    })

    conf.preFetch = true
  })
 }
