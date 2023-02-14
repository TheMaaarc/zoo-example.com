<template>
  <div class="container" v-html="content.content" />
</template>

<script>
export default {
  props: {
    isEditable: {
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