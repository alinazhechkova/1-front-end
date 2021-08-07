<template>
    <section class="beetroot-collections collections">
        <div class="collections__container container">
            <div class="collections__item">
                <img src="../assets/bg1.png" alt="" class="collections__img" />
                <div class="collections__content">
                    <h3 class="collections__title">Nike</h3>
                    <p class="collections__info">
                        Switch it up with
                        <strong>interchangeable</strong> straps.
                    </p>
                    <button class="collections__btn brand__btn">
                        <span class="brand__btn-span">More</span>
                    </button>
                </div>
            </div>
            <div class="collections__item">
                <img src="../assets/bg2.png" alt="" class="collections__img" />

                <div class="collections__content">
                    <h3 class="collections__title">Adidas achive</h3>
                    <p class="collections__info">
                        Discover our <strong>new capsule</strong> collection
                    </p>
                    <button class="collections__btn brand__btn">
                        <span class="brand__btn-span">More</span>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: "beetroot-collections",
};
</script>
<style lang="scss">
.collections {
    &__container {
        padding: 50px 0 115px;
    }
    &__item {
        position: relative;
        height: 280px;
        width: 100%;
        overflow: hidden;
        &:nth-child(2n) {
            & .collections__content {
                bottom: 10%;
                left: 15%;
                align-content: flex-start;
            }
            & .collections__title,
            & .collections__content,
            & .collections__info,
            & .collections__btn {
                text-align: left;
                align-self: flex-start;
            }
        }
    }
    &__content {
        position: absolute;
        bottom: 15%;
        right: 15%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    &__img {
        opacity: 0.6;
        width: 100%;
        object-fit: cover;
        object-position: left;
    }
    &__title {
        text-transform: uppercase;
        color: #000;
        text-align: right;
        margin-bottom: 10px;
    }
    &__info {
        color: #000;
        font-size: 20px;
        width: 250px;
        text-align: right;
        margin-bottom: 20px;
    }
    &__btn {
        align-self: flex-end;
    }
}
</style>
