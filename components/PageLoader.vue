<template>
  <div v-if="page">
    <component
      v-for="item in page.json"
      :key="item.uid"
      :is="resolveComponent(item.component)"
      :config="item.config"
      :content="item.content"
      :items="item.items"
      :slots="item.slots"
      :is-editable="isEditAllowed"
      @update="updateReference($event, item)"
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
  },
  computed: {
    isEditAllowed() {
      return this.$flyo.isEditAllowed()
    }
  },
  methods: {
    updateReference($event, item) {
      const value = $event.event.target.innerHTML
      const attribute = $event.identifier

      this.$flyo.updateContent(value, attribute, item.uid, this.page.id)
    }
  }
}
</script>