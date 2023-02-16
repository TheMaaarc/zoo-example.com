<template>
    <div>
        <slot
            v-if="page"
            v-bind="page"
        >
            <FlyoComponent
                v-for="item in page.json"
                :key="item.uid"
                :item="item"
            />
        </slot>
    </div>
</template>

<script>
export default {
    props: {
        home: {
            type: Boolean,
            default: false
        },
        slug: {
            type: [String, Boolean],
            default: () => false
        }
    },
    data() {
        return {
            page: null
        }
    },
    methods: {
        async fetch() {
            if (this.home) {
                this.page = await this.$flyo.pagesApi.home()
            } else {
                this.page = await this.$flyo.pagesApi.page({slug: this.slug})
            }
        }
    },
    mounted() {
        this.fetch()
    }
}
</script>