<template>
    <fixed-header :threshold="100">
        <header
            class="shop__header header"
            :class="{ change_color: scrollPosition > 2990 }"
        >
            <button
                class="header__open btn-open"
                id="openMenu"
                @click="openMenu"
            >
                <span class="btn-open__span"></span>
            </button>
            <div class="container header__container">
                <beetroot-cart class="cart" />

                <beetroot-account class="account" />
                <beetroot-search class="search" />
            </div>
        </header>
    </fixed-header>
</template>

<script>
import BeetrootCart from "./cart/BeetrootCart.vue";
import BeetrootAccount from "./account/BeetrootAccount.vue";
import BeetrootSearch from "./search/BeetrootSearch.vue";
import FixedHeader from "vue-fixed-header";

export default {
    name: "beetroot-header",
    components: {
        BeetrootCart,
        BeetrootAccount,
        FixedHeader,
        BeetrootSearch,
    },
    data() {
        return { scrollPosition: null };
    },
    methods: {
        openMenu() {
            const el = document.querySelector(".header__container");
            const btn = document.getElementById("openMenu");
            el.classList.toggle("active");
            btn.classList.toggle("active");
            document.body.classList.toggle("fixed");
        },
        updateScroll() {
            window.addEventListener("scroll", () => {
                this.scrollPosition = window.scrollY;
            });
        },
    },
    mounted() {
        this.updateScroll();
    },
};
</script>
<style lang="scss">
.shop {
}
.header {
    background-color: #ecebf0;
    &.vue-fixed-header--isFixed {
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
        background: white;
        z-index: 100000;
    }
    &__container {
        display: flex;
        justify-content: flex-end;
        padding: 30px;
        @media screen and (max-width: 768px) {
            overflow: hidden;
            pointer-events: none;
            transform: translateX(-1000px);
            display: block;
            transition: transform 0.5s ease;
            background: rgba(255, 255, 255, 0.9);
            z-index: 100000;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            &.active {
                overflow: visible;
                pointer-events: all;
                width: 100vw;
                transform: translateX(0);
                max-width: 100vw;
                margin: 0;
            }
        }
    }
}

.btn-open {
    position: absolute;
    top: 30px;
    right: 30px;
    display: none;
    width: 30px;
    height: 30px;
    border: none;
    background: transparent;
    z-index: 10000000;
    &.active {
        & .btn-open__span {
            transform: rotate(45deg);
            transition: transform 0.5s ease;
            &::after {
                display: none;
            }
            &::before {
                top: 0;
                transform: rotate(90deg);
                transition: transform 0.5s ease;
            }
        }
    }
    &__span {
        display: block;
        width: 25px;
        height: 2px;
        background: black;
        position: relative;
        transform: rotate(0);
        transition: transform 0.5s ease;
        &::before,
        &::after {
            content: "";
            display: block;
            position: absolute;
            background: black;
            width: 25px;
            height: 2px;
        }
        &::before {
            top: 8px;
        }
        &::after {
            top: -8px;
        }
    }
    @media screen and (max-width: 768px) {
        display: block;
    }
}
.beetroot-main {
    @media screen and (max-width: 768px) {
        position: relative;
    }
}

.cart {
}
.account {
}
.change_color {
}
body {
    &.fixed {
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
}
.change_color {
    background-color: #ecebf0 !important;
}
</style>
