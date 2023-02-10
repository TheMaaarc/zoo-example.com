<template>
  <div v-if="page">
    <component
      v-for="(item,index) in page.json"
      :key="index"
      :is="resolveComponent(item.component)"
      :config="item.config"
      :content="item.content"
      :items="item.items"
      :slots="item.slots"
    />
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: Object,
      default: false
    }
  }
}
</script>