const glob = require('glob')
module.exports = function (api) {
  api.removePath('src/boot/auth.js')
  api.removePath('src/store/auth')
  api.removePath('src/pages/auth')
  api.removePath('src/layouts/auth')


  if (api.prompts.superuser_functionality) {
    api.removePath('src/components/ResponsiveModal.vue')
  }

  glob(__dirname + "/templates/auth/src/i18n/**/auth.js", {}, (err, files)=>{
    if (files.length) {
      files.forEach((file) => {
        let path = file.split('templates/auth')
        api.removePath(path[path.length - 1])
      })
    }
  })

  api.onExitLog('------------------------------------------------------')
  api.onExitLog('Don\'t forget to remove the AuthMenu from your layout.')
}