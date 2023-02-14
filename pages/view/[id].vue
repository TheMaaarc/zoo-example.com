<template>
  <div v-if="data">
    <h1>{{ data.entity.entity_title }}</h1>
    <h2>{{ data.entity.entity_teaser }}</h2>
    <div class="row">
      <div class="col-6">
        <img :src="data.model.image.source" class="img-fluid" />
      </div>
      <div class="col-6">
        <p>{{ data.model.description }}</p>
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

    // uncomment if
    // fetch(this.data.entity.entity_metric.api)
  }
}
</script>