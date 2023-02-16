import { ApiClient, ConfigApi, PagesApi, EntitiesApi, SitemapApi, ContentApi } from '@flyodev/nitrocms'

import FlyoPage from './FlyoPage'
import FlyoComponent from './FlyoComponent'
import FlyoNav from './FlyoNav'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.component('FlyoPage', FlyoPage)
    nuxtApp.vueApp.component('FlyoComponent', FlyoComponent)
    nuxtApp.vueApp.component('FlyoNav', FlyoNav)

    const runtimeConfig = useRuntimeConfig()

    var defaultClient = ApiClient.instance
    defaultClient.defaultHeaders = {}

    var ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"]
    ApiKeyAuth.apiKey = runtimeConfig.public.TOKEN

    const apis = {
        configApi: new ConfigApi(),
        pagesApi: new PagesApi(),
        entitiesApi: new EntitiesApi(),
        sitemapApi: new SitemapApi(),
        contentApi: new ContentApi(),
    }

    let config = null

    return {
        provide: {
            flyo: {
                ...apis,
                getConfig: async () => {
                    try {
                        if (!config) {
                            config = await apis.configApi.config()
                        }

                        return config
                    } catch (e) {
                        console.error(e)
                        return null
                    }
                },
                isEditAllowed: () => {
                    const route = useRoute()
                    const token = route.query?.token || false

                    if (token && runtimeConfig.public.ALLOW_EDIT) {
                        return true
                    }

                    return false
                },
                async updateContent(newValue, contentIdentifier, uid, pageId) {
                    const route = useRoute()

                    try {
                        const res = await apis.contentApi
                            .putContent(pageId, {
                                value: newValue,
                                identifier: contentIdentifier,
                                uid: uid,
                                token: route.query.token,
                            })

                        return res
                    } catch (e) {
                        console.error(e)
                        return e
                    }
                },
            },
        },
    }
})
