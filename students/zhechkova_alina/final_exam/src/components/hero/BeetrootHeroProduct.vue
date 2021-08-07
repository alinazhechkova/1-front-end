<template>
    <div class="beetroot-hero-product">
        <div class="hero-product">
            <div class="hero-img">
                <beetroot-image
                    :src="product.img"
                    :alt="product.name"
                    :title="product.name"
                    class="hero-image"
                />
            </div>

            <div class="hero-product__content">
                <strong class="hero-product__title">{{ product.name }}</strong>

                <div class="hero-product__price">
                    <beetroot-price :product="product" />
                </div>
                <div class="beetroot-button hero-product__button">
                    <button @click="addToCartProduct" class="button_hero">
                        Add <span class="button__span button__span_add">+</span>
                    </button>
                    <button
                        class="hero-product__details details"
                        id="seeDetails"
                    >
                        <span class="details__line">See details</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from "vuex";
import BeetrootImage from "../catalog/BeetrootImage.vue";
import BeetrootPrice from "../catalog/BeetrootPrice.vue";
export default {
    components: { BeetrootPrice, BeetrootImage },
    name: "beetroot-hero-product",
    props: {
        product: {
            type: Object,
            default() {
                return {};
            },
        },
    },

    methods: {
        addToCartProduct() {
            const product = this.product;
            this.addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                specialPrice: product.specialPrice,
                img: product.img,
                sku: product.sku,
                qty: 1,
            });
        },
        ...mapActions(["addToCart"]),
    },
};
</script>
<style lang="scss">
.hero-product {
    height: 500px;
    display: flex;
    flex-direction: row;
    min-height: 300px;
    justify-content: space-around;
    align-content: space-around;
    margin-top: 8%;
    &__gender {
        font-size: 40px;
        text-transform: uppercase;
        align-self: center;
        margin-top: 150px;
        @media screen and (max-width: 990px) {
            display: none;
        }
    }
    &__button {
        display: flex;
        justify-content: center;
        @media screen and (max-width: 990px) {
            align-self: normal;
        }
        @media screen and (max-width: 768px) {
            align-items: center;
        }
    }
    &__content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: -250px;
        @media screen and (max-width: 990px) {
            margin-top: -25%;
            align-items: center;
        }
        @media screen and (max-width: 768px) {
            margin-left: 60px;
        }
    }
    &__details {
        margin-left: 100px;
        @media screen and (max-width: 990px) {
            display: none;
        }
    }
    &__title {
        font-size: 60px;
        max-width: 389px;
        width: 100%;
        display: block;
        text-align: left;
        line-height: 1.2em;
        @media screen and (max-width: 1200px) {
            font-size: 50px;
        }
        @media screen and (max-width: 990px) {
            font-size: 30px;
            text-align: center;
        }
    }
    &__price {
        font-size: 50px;
        margin-top: 10px;
        margin-bottom: 20px;
        @media screen and (max-width: 1200px) {
            font-size: 40px;
        }
        @media screen and (max-width: 990px) {
            margin: 0;
        }
    }
    &__info {
        @media screen and (max-width: 990px) {
            display: flex;
            flex-direction: raw;
        }
    }
    &__labels {
        @media screen and (max-width: 990px) {
            margin: 0;
        }
    }
    @media screen and (max-width: 990px) {
        flex-direction: column;
        margin-top: -7%;
    }
}
.price {
    @media screen and (max-width: 990px) {
        display: none;
    }
}
.button {
    &__span {
        display: block;
        color: #1117f3;
        font-size: 18px;
        position: absolute;
        right: 14px;
    }
}
.button_hero {
    max-width: 165px;
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: flex-start;
    position: relative;
    color: #1117f3;
    font-weight: bold;
    border: 2px solid black;
    background-color: transparent;
    text-transform: uppercase;
    @media screen and (max-width: 1200px) {
        max-width: 120px;
    }
    @media screen and (max-width: 768px) {
        max-width: 100px;
    }
    @media screen and (max-width: 576px) {
        max-width: 120px;
        padding: 5px;
        margin-left: -12%;
        margin-top: 3%;
    }
}
.details {
    border: none;
    background-color: transparent;
    display: inline-block;
    padding: 0px;
    &__line {
        text-transform: uppercase;
        font-weight: bold;
        &::after {
            display: block;
            content: "";
            height: 1px;
            width: 100%;
            background-color: #000;
        }
        @media screen and (max-width: 768px) {
            font-size: 12px;
        }
    }
    @media screen and (max-width: 576px) {
        display: none;
    }
}
.hero-img {
    height: 270px;
    transform: rotate(15deg);
    &::before {
        height: 400px;
        width: 400px;
        content: "";
        display: block;
        position: absolute;
        background-color: #fff;
        z-index: -1;
        margin: -54px 68px;
        border-radius: 50%;
        @media screen and (max-width: 1200px) {
            height: 350px;
            width: 350px;
            margin: -80px -115px;
        }
        @media screen and (max-width: 990px) {
            height: 300px;
            width: 300px;
            margin: -55px -84px;
        }
        @media screen and (max-width: 768px) {
            height: 250px;
            width: 250px;
            margin: -27px -39px;
        }
    }
    @media screen and (max-width: 990px) {
        margin: 0 auto;
        padding-bottom: 10%;
    }
    @media screen and (max-width: 768px) {
        height: 250px;
    }
}
</style>

