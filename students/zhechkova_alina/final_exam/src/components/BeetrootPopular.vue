<template>
    <div class="beetroot-popular">
        <div class="container">
            <div class="catalog__content">
                <h2 class="catalog__title">
                    <span class="catalog__subtitle">Popular</span> Shoes
                </h2>
                <router-link to="/all" class="explore__btn details">
                    <span class="details__line explore__span"
                        >Shop all
                    </span></router-link
                >
            </div>
            <div class="slide-count_popular">
                <span class="current-slide_popular">1</span>6
            </div>
            <VueSlickCarousel
                v-bind="options"
                ref="carousel"
                v-if="productList.length"
                @afterChange="getSliderIndexCatalog"
            >
                <beetroot-product
                    v-for="product in sorted"
                    :key="product.id"
                    :product="product"
                    class="p-3"
                />
            </VueSlickCarousel>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

import BeetrootProduct from "./catalog/BeetrootProduct.vue";
export default {
    components: { BeetrootProduct, VueSlickCarousel },
    name: "beetroot-popular",
    data: () => {
        return {
            sortedProducts: [],
            currentBrand: "Fairfield",
            options: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,

                responsive: [
                    {
                        breakpoint: 990,
                        settings: {
                            slidesToShow: 2,
                        },
                    },
                    {
                        breakpoint: 586,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
                    },

                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                ],
            },
        };
    },
    methods: {
        ...mapActions(["setProduct"]),
        getSliderIndexCatalog(currentSlide) {
            const el = document.querySelector(".current-slide_popular");
            el.innerHTML = currentSlide + 1;
        },
    },
    computed: {
        ...mapGetters(["productList"]),
        sorted() {
            return this.productList.filter((item) => item.price >= 120);
        },
    },

    created() {
        this.setProduct();
    },
};
</script>
<style lang="scss">
.beetroot-popular {
    padding: 50px 0 100px;
    background-color: #ecebf0;
    & .slick-arrow {
        background-color: transparent;
    }
}
.slide-count_popular {
    font-size: 25px;
}
.current-slide_popular {
    color: #2121ff;
    font-weight: bold;
    margin-right: 70px;
    position: relative;
    &::after {
        content: "";
        display: inline-block;
        height: 3px;
        width: 40px;
        background-color: #000;
        position: absolute;
        top: 50%;
        transform: translate(35%, -50%);
    }
}
</style>
