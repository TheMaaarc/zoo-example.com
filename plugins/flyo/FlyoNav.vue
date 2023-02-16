<template>
    <component :is="tag">
        <slot v-if="nav" :nav="nav"></slot>
    </component>
</template>

<script>
export default defineNuxtComponent({
    props: {
        tag: {
            type: String,
            default: 'nav'
        }
    },
    async asyncData({ $flyo }) {
        const config = await $flyo.getConfig()

        return {
            nav: config.nav
        }
    }
})
</script>
