<template>
    <component
        :is="resolveComponent(item.component)"
        :config="item.config"
        :content="item.content"
        :items="item.items"
        :slots="item.slots"
        :is-editable="$flyo.isEditAllowed()"
        @update="$flyo.updateReference($event, item)"
    />
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            default: () => {}
        }
    }
}
</script>