<template>
  <page-loader v-if="page" :page="page" />
</template>

<script>
import PageLoader from '~~/components/PageLoader.vue'
export default {
  components: { PageLoader },
  data:() => ({
    page: false,
  }),
  async created() {
    this.page = await this.$pagesApi.home()
  },
};
</script>