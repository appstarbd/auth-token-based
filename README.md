Quasar App Extension - Auth Token Based
===

This app extension provides token based authentication functionality.

![screenshot](https://raw.githubusercontent.com/stefanvanherwijnen/auth-token-based/master/image.png)

# Install
```bash
quasar ext add auth-token-based
```
Quasar CLI will retrieve it from NPM and install the extension.

## Prompts

The installation prompts for the routes which should be used to communicate with the backend. The requests and responses of the server should match with this extension.
Please have a look at https://github.com/stefanvanherwijnen/express-ts-api-starter to see which format this extension uses.

## Layout

A menu component is available as AuthMenu. To use it, add it to the layout, e.g.:
```html
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
```

# Notes
Note that an existing axios boot file will be overwritten.

# Uninstall
```bash
quasar ext remove auth-token-based
```

# Donate
If you appreciate the work that went into this App Extension, please consider [donating to Quasar](https://donate.quasar.dev).
