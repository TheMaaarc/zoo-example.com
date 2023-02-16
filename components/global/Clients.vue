<template>
    <div>
        <strong>Clients</strong>
        Config: {{ config }}<br />
        Content: {{ content }}<br />
        Items: {{ items }}<br />
        Slots: {{ slots }}
    </div>
</template>

<script>
export default {
  props: {
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