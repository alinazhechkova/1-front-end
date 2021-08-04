<template>
    <div class="beetroot-labels">
        <div v-for="label in product.labels" class="label" :key="label">
            {{ label }}
        </div>
    </div>
</template>
<script>
export default {
    name: "beetroot-labels",
    props: {
        product: Object,
    },
};
</script>
<style lang="scss">
.label {
    font-size: 40px;
    font-weight: bold;
    text-transform: uppercase;
    color: #2121ff;
}
.beetroot-labels {
    margin-top: 100px;
}
</style>
