<template>
  <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img :src="content.image.source" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3" :contenteditable="isEditAllowed" @blur="$emit('update', {event:$event, identifier:'title'})">{{ content.title }}</h1>
        <p class="lead">{{ content.teaser }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isEditAllowed: {
      type: Boolean,
      default: true,
    },
    config: {
      type: Object,
      default: () => {}
    },
    content: {
      type: Object,
      default: () => {}
    },
    items: {
      type: Object,
      default: () => []
    },
    slots: {
      type: Object,
      default: () => []
    },
  }
}
</script>