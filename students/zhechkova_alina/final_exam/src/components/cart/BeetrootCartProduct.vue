<template>
    <tr class="table__row">
        <td class="table__column">
            <div class="cart__product">
                <div class="cart__img">
                    <beetroot-image
                        :src="item.img"
                        :alt="item.name"
                        :title="item.name"
                        class="rounded img-thumbnail float-start"
                    />
                </div>
                <div class="cart__info">
                    <p class="cart__name">{{ item.name }}</p>
                </div>
            </div>
        </td>
        <td class="table__column">
            <beetroot-button-action :product="item" :index="index" />
        </td>
        <td class="table__column table__column_specialprice">
            <p class="cart__specialprice">
                {{ currencySymbol }} {{ item.specialPrice }}
            </p>
        </td>
        <td class="table__column table__column_totalprice">
            <p class="cart__totalprice">
                {{ currencySymbol }} {{ item.specialPrice * item.qty }}
            </p>
        </td>
        <td class="table__column table__column_btn">
            <button class="button__remove" @click="removeProductCart">X</button>
        </td>
    </tr>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import BeetrootImage from "../catalog/BeetrootImage.vue";
import BeetrootButtonAction from "./BeetrootButtonAction.vue";
export default {
    name: "beetroot-cart-product",
    props: {
        item: Object,
        index: Number,
    },
    components: {
        BeetrootButtonAction,
        BeetrootImage,
    },
    methods: {
        ...mapActions(["removeProduct"]),
        removeProductCart() {
            this.removeProduct(this.index);
        },
    },
    computed: {
        ...mapGetters([
            "cart",
            "cartTotalQty",
            "cartTotalPrice",
            "currencySymbol",
        ]),
    },
};
</script>
<style lang="scss">
.cart {
    &__name {
        text-align: center;
        font-weight: bold;
        font-size: 18px;
    }
    &__product {
        display: flex;
    }
    &__info {
        align-self: center;
        margin-left: 16%;
    }
    &__row {
        z-index: 1000;
    }
    &__img {
        height: 150px;
    }
    &__totalprice {
        color: #2121ff;
    }
}
.button__remove {
    border: none;
    background: transparent;
    color: red;
    padding: 0;
    margin: 0;
}
</style>
