<template>
    <div class="details__window">
        <div class="details__header">
            <h3 class="details__title">
                {{ product.fullName }}
            </h3>
        </div>
        <div class="details__main">
            <ul class="details__list">
                <li
                    class="details__item"
                    v-for="item of product.charachteristics"
                    :key="item"
                >
                    {{ item }}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: "beetroot-details",
    props: {
        product: Object,
    },
};
</script>
<style lang="scss">
.details {
    &__window {
        z-index: 100000;
        opacity: 1;
    }
    &__title {
        color: #fff;
    }
}
</style>
