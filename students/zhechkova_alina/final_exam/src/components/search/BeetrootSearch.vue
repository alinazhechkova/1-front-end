<template>
    <div class="beetroot-search">
        <button type="button" class="search__btn" @click="openSearchWindow">
            <font-awesome-icon icon="search" />
        </button>
        <div class="search__window" ref="searchWindow">
            <button
                @click="closeSearchWindow"
                type="button"
                class="search__close"
                id="closeSearchWindow"
            >
                X
            </button>
            <h3 class="search__title">Search now</h3>
            <input
                type="text"
                @input="searchForProduct"
                id="searchInput"
                class="search__input"
            />
            <div class="search__result row">
                <beetroot-product
                    v-for="product in foundProduct"
                    :key="product.id"
                    :product="product"
                    class="p-3 col-12 col-md-6"
                />
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import BeetrootProduct from "../catalog/BeetrootProduct.vue";
export default {
    name: "beetroot-search",
    data() {
        return {
            product: null,
        };
    },
    components: {
        BeetrootProduct,
    },
    methods: {
        openSearchWindow() {
            this.$refs.searchWindow.classList.add("active");
            document.body.classList.add("fixed");
        },
        closeSearchWindow() {
            this.$refs.searchWindow.classList.remove("active");
            document.body.classList.remove("fixed");
        },
        searchForProduct(e) {
            this.product = "";
            this.product = e.target.value;
            console.log(
                this.product,
                this.productList.filter((item) =>
                    item.name.includes(this.product)
                )
            );
        },
    },
    computed: {
        ...mapGetters(["productList"]),
        foundProduct() {
            if (!this.product) {
                return;
            }
            return this.productList.filter((post) => {
                return post.name
                    .toLowerCase()
                    .includes(this.product.toLowerCase());
            });
        },
    },
};
</script>
<style lang="scss">
.search {
    &__btn {
        display: block;
        background: transparent;
        border: none;
    }
    &__window {
        position: absolute;
        background: rgba(255, 255, 255, 0.98);
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1000000;
        visibility: hidden;
        pointer-events: none;
        transform: translateX(-2500px);
        transition: transform 0.5s ease;
        padding: 50px 70px;
        overflow-y: auto;
        &.active {
            visibility: visible;
            pointer-events: all;
            transform: translateX(0);
        }
    }
    &__close {
        position: absolute;
        right: 30px;
        background: transparent;
        border: none;
        font-size: 20px;
    }
    &__input {
        width: 100%;
        border: none;
        border-bottom: 1px solid lightgray;
        padding: 15px 100px 15px 30px;
        font-size: 20px;
    }
    &__title {
        text-transform: uppercase;
        color: #2121ff;
        font-size: 20px;
        font-weight: bold;
        text-align: right;
        position: absolute;
        right: 72px;
        top: 65px;
    }
}
</style>
