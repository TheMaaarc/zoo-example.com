<template>
  <div v-if="data" class="container">
    <h1>{{ data.entity.entity_title }}</h1>
    <div class="row mt-3">
      <div class="col-6">
        <img :src="data.model.image.source" class="img-fluid" />
      </div>
      <div class="col-6">
        <h2>{{ data.entity.entity_teaser }}</h2>
        <p class="mt-3">{{ data.model.description }}</p>
        <p>&copy; {{ data.model.copyright }}</p>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data:() => ({
    data: false,
  }),
  async created() {
    this.data = await this.$flyo.entitiesApi.entity(this.$route.params.id)
    fetch(this.data.entity.entity_metric.api)
  }
}
</script>