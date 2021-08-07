<template>
    <div class="beetroot-price price">
        <div class="price__special">
            {{ currencySymbol }}{{ product.specialPrice }}
        </div>
        <div class="price__first" v-if="product.price !== product.specialPrice">
            {{ currencySymbol }}{{ product.price }}
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    name: "beetroot-price",
    props: {
        product: Object,
    },
    computed: {
        ...mapGetters(["currencySymbol"]),
    },
};
</script>
<style lang="scss">
.price {
    display: flex;
    justify-content: center;
    &__first {
        text-decoration: line-through;
        color: #a6a6a6;
        font-weight: light;
    }
    &__special {
        color: #1117f3;
        font-weight: bold;
        margin-right: 10px;
    }
}
</style>
