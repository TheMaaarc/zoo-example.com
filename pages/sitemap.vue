<template>
<div>
    <h1>Sitemap</h1>
    <ul>
        <li 
            v-for="(item,index) in sitemap"
            :key="index"
        >
            <NuxtLink :to="{name: 'view-id', params: {id: item.entity_unique_id}}">
            {{ item.entity_title }}
            </NuxtLink>
        </li>
    </ul>
</div>
</template>

<script>
import PageLoader from '~~/components/PageLoader.vue'
export default {
  components: { PageLoader },
  data:() => ({
    sitemap: []
  }),
  async created() {
    this.sitemap = await this.$sitemapApi.sitemap()
  },
};
</script>