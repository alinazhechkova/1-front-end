<template>
    <div class="beetroot-all all">
        <beetroot-header class="all__header" />
        <section class="all__section">
            <div class="container all__container">
                <div class="row all__row">
                    <beetroot-product
                        v-for="product in productList"
                        :key="product.id"
                        :product="product"
                        class="p-3 col-md-6 col-lg-4 col-12"
                    />
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import BeetrootHeader from "./BeetrootHeader.vue";
import { mapGetters } from "vuex";
import BeetrootProduct from "./catalog/BeetrootProduct.vue";
export default {
    components: {
        BeetrootHeader,
        BeetrootProduct,
    },
    name: "beetroot-all",
    computed: {
        ...mapGetters(["productList"]),
    },
};
</script>

<style lang="scss">
.all {
    &__header {
        background: white;
    }
    &__container {
        @media screen and (max-width: 768px) {
            padding-top: 100px;
        }
    }
}
</style>
