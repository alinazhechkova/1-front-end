<template>
    <div class="beetroot-all all">
        <beetroot-header class="all__header" />
        <section class="all__section">
            <div class="container all__container">
                <button class="details all__fiterBtn">
                    <span class="details__line" @click="openFilter"
                        >Filter</span
                    >
                </button>
                <div class="all__filters" ref="filter">
                    <div class="all__price">
                        <h3 class="all__price-title">Price:</h3>
                        <p class="all__minPrice">$ {{ minPrice }}</p>
                        <div class="all__range-slider">
                            <input
                                type="range"
                                min="0"
                                max="200"
                                step="1"
                                v-model.number="minPrice"
                                @change="setRangeSlider"
                            />
                            <input
                                type="range"
                                min="0"
                                max="200"
                                step="1"
                                v-model.number="maxPrice"
                                @change="setRangeSlider"
                            />
                        </div>
                        <p class="all__maxPrice">$ {{ maxPrice }}</p>
                    </div>
                    <div class="all__brand">
                        <h3 class="all__price-title">Brand:</h3>
                        <div class="all__filterBrand">
                            <label class="col-6"
                                >New Balance:<input
                                    type="checkbox"
                                    name="newBalance"
                                    id="filterBrand"
                                    @change="filterByBrand"
                            /></label>
                            <label class="col-6"
                                >ASICS:
                                <input
                                    type="checkbox"
                                    name="asics"
                                    id="filterBrand"
                                    @change="filterByBrand"
                                />
                            </label>
                            <br />
                            <label class="col-6"
                                >Nike:
                                <input
                                    type="checkbox"
                                    name="nike"
                                    id="filterBrand"
                                    @change="filterByBrand"
                                />
                            </label>
                            <label class="col-6"
                                >Adidas:
                                <input
                                    type="checkbox"
                                    name="adidas"
                                    id="filterBrand"
                                    @change="filterByBrand"
                                />
                            </label>
                        </div>
                    </div>
                </div>

                <div class="row all__row">
                    <beetroot-product
                        v-for="product in sortedProducts"
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
    data() {
        return {
            minPrice: 0,
            maxPrice: 200,
            sorted: [],
        };
    },
    name: "beetroot-all",
    computed: {
        ...mapGetters(["productList"]),
        sortedProducts() {
            return this.productList.filter((item) => {
                return (
                    item.specialPrice >= this.minPrice &&
                    item.specialPrice <= this.maxPrice
                );
            });
        },
    },
    methods: {
        setRangeSlider() {
            this.sortByPrice;
            if (this.minPrice > this.maxPrice) {
                let temp = this.maxPrice;
                this.maxPrice = this.minPrice;
                this.minPrice = temp;
            }
        },
        openFilter() {
            this.$refs.filter.classList.toggle("active");
        },
        filterByPrice() {},
        filterByBrand(e) {
            if (e.target.name === "newBalance") {
                if (e.target.checked) {
                    this.sorted.push(
                        ...this.productList.filter((item) => {
                            return item.brand === "New Balance";
                        })
                    );
                }
                if (!e.target.checked) {
                    this.sorted
                        .filter((item, index) => {
                            if (item.brand === "Nike") {
                                return index;
                            }
                        })
                        .forEach((ind) => {
                            this.sorted.splice(ind, 1);
                        });
                }
            }
            if (e.target.name === "asics") {
                if (e.target.checked) {
                    this.sorted.push(
                        ...this.productList.filter((item) => {
                            return item.brand === e.target.name.toUpperCase();
                        })
                    );
                }
                if (!e.target.checked) {
                    this.sorted
                        .map((item, index) => {
                            if (item.brand === "Nike") {
                                return index;
                            }
                        })
                        .forEach((ind) => {
                            this.sorted.splice(ind, 1);
                        });
                }
            }
            if (e.target.name === "nike") {
                if (e.target.checked) {
                    this.sorted.push(
                        ...this.productList.filter((item) => {
                            return item.brand === "Nike";
                        })
                    );
                }
                if (!e.target.checked) {
                    this.sorted
                        .map((item, index) => {
                            if (item.brand === "Nike") {
                                return index;
                            }
                        })
                        .forEach((ind) => {
                            this.sorted.splice(ind, 1);
                        });
                }
            }
            if (e.target.name === "adidas") {
                if (e.target.checked) {
                    this.sorted.push(
                        ...this.productList.filter((item) => {
                            return item.brand === "Adidas";
                        })
                    );
                }
                if (!e.target.checked) {
                    this.sorted
                        .map((item, index) => {
                            if (item.brand === "Nike") {
                                return index;
                            }
                        })
                        .forEach((ind) => {
                            this.sorted.splice(ind, 1);
                        });
                }
            }

            console.log(this.sorted);
        },
        mounted() {
            this.filterByPrice();
        },
    },
};
</script>

<style lang="scss">
.all {
    & label {
        display: block;
    }
    &__header {
        background: white;
    }
    &__brand {
        display: flex;
    }
    &__filterBrand {
        display: flex;
        flex-wrap: wrap;
    }
    &__filterBtn {
        display: flex;
        margin-bottom: 30px;
    }
    &__container {
        @media screen and (max-width: 768px) {
            padding-top: 100px;
        }
    }
    &__price-title {
        margin-right: 20px;
    }
    &__price {
        display: flex;
        align-items: center;
    }
    &__filters {
        display: none;
        &.active {
            display: block;
        }
    }
    &__range-slider {
        width: 200px;
        margin: auto 16px;
        text-align: center;
        position: relative;
        & svg,
        & input[type="range"] {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
        }
    }
    &__minPrice,
    &__maxPrice {
        font-weight: bold;
        font-size: 16px;
    }
}
input[type="range"]::-webkit-slider-thumb {
    z-index: 2;
    position: relative;
    top: 2px;
    margin-top: -7px;
}
</style>
