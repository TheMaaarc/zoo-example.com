import { ApiClient, ConfigApi, PagesApi } from '@flyodev/nitrocms'

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig()

  var defaultClient = ApiClient.instance;
  defaultClient.defaultHeaders = {}
  
  var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
  ApiKeyAuth.apiKey = config.public.TOKEN

  return {
    provide: {
      configApi: new ConfigApi,
      pagesApi: new PagesApi
    }
  }
})