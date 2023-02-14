import { ApiClient, ConfigApi, PagesApi, EntitiesApi, SitemapApi, ContentApi } from '@flyodev/nitrocms'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  
  var defaultClient = ApiClient.instance;
  defaultClient.defaultHeaders = {}
  
  var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
  ApiKeyAuth.apiKey = config.public.TOKEN
  
  const contentApi = new ContentApi
  
  return {
    provide: {
      flyo : {
        configApi: new ConfigApi,
        pagesApi: new PagesApi,
        entitiesApi: new EntitiesApi,
        sitemapApi: new SitemapApi,
        contentApi: contentApi,
        isEditable: () => {
          const route = useRoute()
          const token = route.query?.token || false
          if (token && (process.env.NODE_ENV === 'preview' || process.env.NODE_ENV === 'development')) {
            return true
          }

          return false
        },
        updateContent(newValue, contentIdentifier, uid, pageId) {
          const route = useRoute()
          contentApi.putContent(pageId, {
            value: newValue,
            identifier: contentIdentifier,
            uid: uid,
            token: route.query.token
          }).then((resp) => {
            console.log(resp)
          }, (error) => {
            console.error(error)
          })
        }
      }
    },
  }
})