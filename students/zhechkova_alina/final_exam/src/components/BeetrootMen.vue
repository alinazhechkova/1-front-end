<template>
    <div class="beetroot-men men">
        <beetroot-header class="men__header" />
        <section class="men__section">
            <div class="men__container container">
                <div class="men__row row">
                    <beetroot-product
                        v-for="product in filtered"
                        :key="product.id"
                        :product="product"
                        class="p-3 col-md-4 col-12"
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
    name: "beetroot-men",
    computed: {
        ...mapGetters(["productList"]),
        filtered() {
            return this.productList.filter((item) => item.gender === "Men");
        },
    },
};
</script>

<style lang="scss">
.men {
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
