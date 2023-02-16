import { processExpression } from "@vue/compiler-core";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["bootstrap/dist/css/bootstrap.min.css"], // add
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  runtimeConfig: {
    public: {
      TOKEN: process.env.TOKEN || 'error',
      ENV: process.env.NODE_ENV,
      ALLOW_EDIT: process.env.ALLOW_EDIT || false,
    }
  }
})
