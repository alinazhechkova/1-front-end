<template>
    <div class="beetroot-cart cart">
        <div class="container">
            <button @click="openCart" class="openCart">
                <font-awesome-icon icon="shopping-cart" />
            </button>
            <span class="cart__subqty">{{ cartTotalQty }}</span>
            <div class="modal-window cart-window" ref="cart">
                <div class="modal-window__header cart-window__header">
                    <h3 class="modal-window__title cart-window__title">
                        My Basket
                    </h3>
                    <button
                        class="modal-window__btn cart-window__btn"
                        id="closeCart"
                        @click="closeCart"
                    >
                        X
                    </button>
                </div>
                <table class="cart-window__table table">
                    <tr class="table__row">
                        <th class="table__title">Product</th>
                        <th class="table__title">Qty</th>
                        <th class="table__title">Price</th>
                        <th class="table__title">Total</th>
                        <th class="table__title">Remove</th>
                    </tr>
                    <beetroot-cart-product
                        v-for="(item, index) in cart"
                        :key="item.id"
                        :item="item"
                        :index="index"
                    />
                </table>
                <div class="modal-window__footer cart-window__footer">
                    <strong
                        class="modal-window__totalPrice cart-window__totalPrice"
                        >Total:
                        <span class="totalPrice"
                            >{{ currencySymbol }} {{ cartTotalPrice }} </span
                        ><span
                            class="modal-window__totalQty cart-window__totalQty"
                        >
                            ({{ cartTotalQty }} items)</span
                        ></strong
                    >
                    <button
                        class="brand__btn cart-window__btn-buy"
                        v-if="cart.length"
                        @click="emptyCart"
                    >
                        <span class="brand__btn-span">Buy</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BeetrootCartProduct from "./BeetrootCartProduct.vue";
import { mapGetters, mapActions } from "vuex";
export default {
    components: { BeetrootCartProduct },
    name: "beetroot-cart",
    data() {
        return {
            showModal: false,
        };
    },
    computed: {
        ...mapGetters([
            "cart",
            "cartTotalQty",
            "cartTotalPrice",
            "currencySymbol",
        ]),
    },
    methods: {
        ...mapActions(["setCart", "emptyCart"]),
        openCart() {
            this.showModal = !this.showModal;
            this.$refs.cart.classList.toggle("active");
            document.body.classList.add("fixed");
        },
        closeCart() {
            this.showModal = !this.showModal;
            this.$refs.cart.classList.remove("active");
            document.body.classList.remove("fixed");
        },
    },
    created() {
        this.setCart();
    },
};
</script>
<style lang="scss">
.openCart {
    display: flex;
    border: none;
    background-color: transparent;
    position: relative;
    &::after {
        content: "";
        display: inline-block;
        height: 14px;
        margin-left: 15px;
        width: 2px;
        background-color: lightgray;
    }
}
.modal-window {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.98);
    z-index: 10000000;
    display: block;
    visibility: none;
    pointer-events: none;
    transform: translateX(-2000px);
    transition: transform 0.5s ease;
    top: 0;
    left: 0;
    width: 100%;
    bottom: 0;
    right: 0;
    padding: 50px 100px;

    &__title {
        text-transform: uppercase;
        font-size: 20px;
        font-weight: bold;
        text-align: left;
    }
    &.active {
        visibility: visible;
        pointer-events: all;
        overflow-y: auto;
        transform: translateX(0);
    }
    &__header {
        display: flex;
        justify-content: space-between;
    }

    &__btn {
        background: transparent;
        border: none;
        font-size: 20px;
    }

    &__footer {
        display: flex;
        justify-content: space-between;
    }
}
.cart {
    &__outer {
        display: flex;
        cursor: pointer;
    }
    &__subqty {
        background: #2121ff;
        display: block;
        color: white;
        font-weight: bold;
        height: 17px;
        width: 17px;
        border-radius: 50%;
        font-size: 12px;
        position: absolute;
        margin-left: 17px;
        margin-top: -7px;
    }
    &__totalqty {
        height: 30px;
        width: 30px;
        background-color: #2121ff;
        border-radius: 50%;
        color: #fff;
        cursor: pointer;
        margin-right: 10px;
    }
    &__totalprice {
        font-weight: bold;
        font-size: 16px;
    }
    &__inner {
        background-color: gray;
        position: relative;
        height: 100px;
        z-index: 1000;
        visibility: hidden;
        .active {
            visibility: visible;
            overflow-y: auto;
        }
    }
}
.cart-window {
    &__btn-buy {
        @media screen and (max-width: 768px) {
            max-width: 100px;
            text-align: center;
            &::after {
                display: none;
            }
        }
    }
    &__totalPrice {
        font-size: 25px;
        @media screen and (max-width: 768px) {
            font-size: 18px;
        }
    }
    &__totalQty {
        font-weight: normal;
        color: gray;
    }

    &__window {
        overflow-y: auto;
    }
}

.table {
    width: 100%;
    &__title,
    &__column {
        text-align: left;
        padding: 5px 0;
    }

    &__column,
    &__row {
        @media screen and (max-width: 990px) {
            display: block;
        }
    }
    &__column {
        &_totalprice {
            @media screen and (max-width: 990px) {
                display: none;
            }
        }
        &_btn {
            @media screen and (max-width: 990px) {
            }
        }
    }
    &__row {
        @media screen and (max-width: 990px) {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
        }
        @media screen and (max-width: 768px) {
            flex-direction: column;
            justify-content: flex-start;
        }
    }
    &__title {
        @media screen and (max-width: 990px) {
            display: none;
        }
    }

    @media screen and (max-width: 990px) {
        display: block;
    }
}
.totalPrice {
    color: #2121ff;
}
</style>
