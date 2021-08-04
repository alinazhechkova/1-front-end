<template>
    <div class="beetroot-product">
        <div class="product">
            <div class="img">
                <beetroot-image
                    :src="product.img"
                    :alt="product.name"
                    :title="product.name"
                    class="
                        rounded
                        img-thumbnail
                        float-start
                        beetroot-cart-product__img
                    "
                />
            </div>
            <strong class="product__title">{{ product.name }}</strong>

            <beetroot-price :product="product" />
            <div class="beetroot-button product__button">
                <button @click="addToCartProduct" class="button">
                    Add <span class="button__span button__span_add">+</span>
                </button>
            </div>

            <div class="product__details-window details">
                <beetroot-details :product="product" />
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from "vuex";
import BeetrootImage from "./BeetrootImage.vue";
import BeetrootPrice from "./BeetrootPrice.vue";
import BeetrootDetails from "./BeetrootDetails.vue";
export default {
    components: { BeetrootPrice, BeetrootImage, BeetrootDetails },
    name: "beetroot-product",
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
.product {
    display: flex;
    flex-direction: column;
    min-height: 300px;
    justify-content: space-around;
    align-content: space-around;
    &__button {
        display: flex;
        justify-content: center;
    }

    &__details {
        display: block;
    }
    &__details-window {
        position: absolute;
        display: none;
    }
}

.beetroot-product {
    position: relative;
    &:hover {
        &::after {
            display: block;
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(0, 0, 0, 0.5);
        }
        & .product__details-window {
            display: block;
        }
    }
}
.details {
}
.button {
    display: flex;
    justify-content: flex-start;
    position: relative;
    color: #1117f3;
    font-weight: bold;
    width: 90px;
    border: 2px solid black;
    background-color: transparent;

    text-transform: uppercase;
    &__span {
        display: block;
        color: #1117f3;
        font-size: 18px;
        position: absolute;
        right: 14px;
    }
}

.img {
    margin: 0 auto;
    height: 200px;
}
.open-details {
    display: block;
    background: transparent;
    border: none;
    width: 30px;
    height: 10px;
    border: none;
    margin-top: 10px;
    margin: 0 auto;
    &__span {
        display: block;
        height: 5px;
        width: 5px;
        border-radius: 50%;
        background: black;
        position: relative;
        &::after,
        &::before {
            content: "";
            display: block;
            height: 5px;
            width: 5px;
            border-radius: 50%;
            background: black;
            position: absolute;
        }
        &::after {
            left: 10px;
        }
        &::before {
            right: 10px;
        }
    }
}
</style>

