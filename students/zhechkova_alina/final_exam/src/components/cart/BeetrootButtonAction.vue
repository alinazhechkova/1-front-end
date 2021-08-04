<template>
    <div class="beetroot-button-action">
        <div class="change-qty">
            <button class="button_increase" @click="setQtyProduct(true)">
                +
            </button>
            <input class="button__qty-input"
                type="text"
                :value="product.qty"
                @change="changeQtyProduct"
            />
            <button class="button_decrease" @click="setQtyProduct(false)">
                -
            </button>
        </div>
        
    </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
    name: "beetroot-button-action",
    props: {
        product: Object,
        index: Number,
    },
    methods: {
        ...mapActions(["changeQty", "removeProduct"]),
        changeQtyProduct(e) {
            const newQty = e.target.value;
            const oldQty = this.qty;

            if (newQty !== oldQty) {
                const options = {
                    productIndex: this.index,
                    qty: Number(newQty),
                };
                this.changeQty(options);
            }
        },
        removeProductCart() {
            this.removeProduct(this.index);
        },
        setQtyProduct(isIncrement) {
            const options = {
                productIndex: this.index,
                qty: isIncrement ? this.product.qty + 1 : this.product.qty - 1,
            };
            if (this.product.qty < 2 && !isIncrement) {
                this.removeProductCart();
            } else {
                this.changeQty(options);
            }
        },
    },
};
</script>
<style lang="scss">
.button_increase,
.button_decrease {
    display: inline-block;
    background-color: transparent;
    border:none;
    font-size: 35px;
    color: #2121ff;
}
.button {
    &__qty-input {
        width: 35px;
        font-size: 20px;
        text-align:center;
        background-color: transparent;
        border:none;
    }
}
</style>
