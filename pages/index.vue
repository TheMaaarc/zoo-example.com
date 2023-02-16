<template>
    <FlyoPage home v-slot="{ json }">
        <FlyoComponent
            v-for="item in json"
            :key="item.uid"
            :item="item"
        />
    </FlyoPage>
</template>

<script>
export default {}
</script>