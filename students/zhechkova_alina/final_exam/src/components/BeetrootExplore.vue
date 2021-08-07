<template>
    <section class="beetroot-explore">
        <div class="explore__container container">
            <div class="explore__content">
                <h2 class="catalog__title explore__title">
                    <span class="catalog__subtitle explore__subtitle"
                        >Explore</span
                    >
                    Shoes
                </h2>
                <router-link to="/all" class="explore__btn details"
                    ><span class="details__line explore__span"
                        >Shop all</span
                    ></router-link
                >
            </div>
            <div class="explore__flexbox row">
                <div class="col-md-4 col-12 explore__item explore-item">
                    <img
                        src="../assets/men.png"
                        alt=""
                        class="explore-item__img"
                    />
                    <h3 class="explore-item__title">For men</h3>
                    <router-link to="/men" class="brand__btn explore-item__btn"
                        >Men</router-link
                    >
                </div>
                <div class="col-md-4 col-12 explore__item explore-item">
                    <img
                        src="../assets/woman.jpg"
                        alt=""
                        class="explore-item__img"
                    />
                    <h3 class="explore-item__title">For women</h3>
                    <router-link
                        to="/women"
                        class="brand__btn explore-item__btn"
                        >Women</router-link
                    >
                </div>
                <div class="col-md-4 col-12 explore__item explore-item">
                    <img
                        src="../assets/sale.jpg"
                        alt=""
                        class="explore-item__img"
                    />
                    <h3 class="explore-item__title">Watches on sale</h3>
                    <router-link to="/sale" class="brand__btn explore-item__btn"
                        >Sale</router-link
                    >
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: "beetroot-explore",
};
</script>
<style lang="scss">
.explore {
    &__item {
    }
    &__title {
    }
    &__span {
        color: #000;
    }
    &__content {
        display: flex;
        justify-content: space-between;
    }
    &__btn {
        align-self: center;
        text-decoration: none;
    }
    &__container {
        padding: 80px 0;
    }
}
.explore-item {
    &__title {
        text-align: left;
        padding: 20px 0 10px;
        text-transform: uppercase;
        font-size: 25px;
        max-height: 80px;
        height: 100%;
        @media screen and (max-width: 768px) {
            max-height: 60px;
        }
    }
    &__img {
        width: 100%;
        height: 300px;
        object-fit: cover;
    }
    &__btn {
        text-decoration: none;
        color: #2121ff;
    }
    @media screen and (max-width: 768px) {
        &:not(:last-child) {
            margin-bottom: 30px;
        }
    }
}
</style>
