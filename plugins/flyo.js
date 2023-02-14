import { ApiClient, ConfigApi, PagesApi, EntitiesApi, SitemapApi } from '@flyodev/nitrocms'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  
  var defaultClient = ApiClient.instance;

  //defaultClient.basePath = 'http://flyoapi-web-api.dev.heartbeat.gmbh:7171/nitro'
  
  defaultClient.defaultHeaders = {}
  
  var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
  ApiKeyAuth.apiKey = config.public.TOKEN
  const route = useRoute()
  return {
    provide: {
      flyo : {
        configApi: new ConfigApi,
        pagesApi: new PagesApi,
        entitiesApi: new EntitiesApi,
        sitemapApi: new SitemapApi,
        isEditable: route.query?.token && (process.env.NODE_ENV === 'preview' || process.env.NODE_ENV === 'development') ? true : false, // (process.env.NODE_ENV === 'preview' || process.env.NODE_ENV === 'development')
        updateContent(newValue, contentIdentifier, uid, pageId) {
          const route = useRoute()

          const requestOptions = {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                value: newValue,
                identifier: contentIdentifier,
                uid: uid,
                token: route.query.token
              })
          };
          fetch(defaultClient.basePath + '/content/' + pageId + '?token=' + ApiKeyAuth.apiKey, requestOptions)
              .then(response => response.json())
              .then(data => console.log(data));
        }
      }
    },
  }
})