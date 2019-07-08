/**
 * Quasar App Extension install script
 *
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/InstallAPI.js
 */
const glob = require('glob')
 module.exports = function (api) {
   api.render('./templates/auth', {
     prompts: api.prompts
   })

   if (api.prompts.superuser_functionality) {
     api.render('./templates/superuser', {
       prompts: api.prompts
     })
   }

   api.extendPackageJson({
     dependencies: {
       'axios': '^0.18.0',
       'vuelidate': '^0.7.4',
       'vue-i18n': '^7.3.3',
       'jsonapi-vuex': '^1.2.1'
     }
   })

   api.onExitLog('-----------------------------------------------------------------')
   api.onExitLog('Don\'t forget to add the AuthMenu component to your layout. E.g.:')
   api.onExitLog(`
<template>
 <q-layout view="lHh Lpr lFf">
   ...header

   <q-drawer>
     <auth-menu />
   </q-drawer>

   ...container
 </q-layout>
</template>

<script>
import AuthMenu from './auth/AuthMenu'

export default {
 name: 'MyLayout',
 components: {
   AuthMenu
 }
}
</script>
     `)
 }
