<template>
    <div class="beetroot-hero-slider">
        <div class="container">
            <VueSlickCarousel
                :slidesToShow="1"
                :arrows="true"
                ref="carousel"
                v-if="productList.length"
                @afterChange="getSliderIndex"
            >
                <beetroot-hero-product
                    v-for="product in getMaxPrice"
                    :key="product.id"
                    :product="product"
                    class="p-3"
                />
            </VueSlickCarousel>
            <div class="slide-count_hero">
                <span class="current-slide_hero">1</span>4
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

import BeetrootHeroProduct from "./BeetrootHeroProduct.vue";
export default {
    components: { VueSlickCarousel, BeetrootHeroProduct },
    name: "beetroot-hero-slider",
    methods: {
        ...mapActions(["setProduct"]),
        getSliderIndex(currentSlide) {
            const el = document.querySelector(".current-slide_hero");
            el.innerHTML = currentSlide + 1;
        },
    },
    computed: {
        ...mapGetters(["productList"]),
        getMaxPrice() {
            return this.productList.filter((product) => product.price > 150);
        },
    },
    created() {
        this.setProduct();
    },
};
</script>
<style lang="scss">
.beetroot-hero-slider {
    display: flex;
    margin-top: -5%;
    align-items: center;
    height: 100vh;
    & .slick-arrow {
        top: 88%;
        background-color: transparent;
        z-index: 10000;

        @media screen and (max-width: 768px) {
            display: none !important;
        }
    }
    .slick-prev {
        left: 95%;
        right: 0;
        @media screen and (max-width: 576px) {
            left: 80%;
        }
    }
    @media screen and (max-width: 768px) {
        margin-top: 0;
    }
}
.beetroot-hero-slider .slick-list {
    height: calc(100vh - 100px);
    @media screen and (max-width: 768px) {
        margin-top: 50px;
        height: 100vh;
    }
}
.slide-count_hero {
    position: absolute;
    top: 80%;
    left: 10%;
    font-size: 25px;
    @media screen and (max-width: 768px) {
        top: 17%;
        left: 50%;
        transform: translateX(-50%);
        font-size: 20px;
    }
    @media screen and (max-width: 576px) {
        top: 16.5%;
    }
}
.current-slide_hero {
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
