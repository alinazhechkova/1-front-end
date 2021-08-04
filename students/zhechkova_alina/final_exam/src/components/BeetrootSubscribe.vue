<template>
    <section class="beetroot-subscribe subscribe">
        <div class="container subscribe__container">
            <div class="row subscribe__row">
                <h2 class="col-12 col-md-4 catalog__title subscribe__title">
                    Subscribe
                    <span class="catalog__subtitle subscribe__subtitle"
                        >our newsletter</span
                    >
                </h2>
                <p class="col-12 col-md-4 subscribe__content">
                    Subscribe our newsletter and don't miss any of our
                    promotions or sales of Timex watches. Thank you!
                </p>
                <div class="subscribe__form-wrap col-12 col-md-4">
                    <form class="subscribe__form" @submit="submitForm">
                        <input
                            type="email"
                            class="subscribe__input"
                            placeholder="E-mail address"
                        />
                        <button type="submit" class="subscribe__btn">
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "beetroot-subscribe",
    methods: {
        submitForm(e) {
            e.preventDefault();
        },
    },
};
</script>
<style lang="scss">
.beetroot-subscribe {
}
.subscribe {
    background-color: rgba(0, 0, 0, 0.8);
    &__container {
        padding: 50px 0;
    }

    // .subscribe__row

    &__row {
        align-items: center;
    }

    // .subscribe__title

    &__title {
        color: #fff;
        font-size: 23px;
        margin-bottom: 0;
    }

    // .subscribe__subtitle

    &__subtitle {
        display: inline-block;
    }

    // .subscribe__content

    &__content {
        color: #aeaeae;
        font-size: 14px;
    }

    // .subscribe__form

    &__form {
        background-color: transparent;
        border: 1px solid #b7b7b7;
        max-width: 260px;
        width: 100%;
        display: flex;
    }

    // .subscribe__input

    &__input {
        background-color: transparent;
        border: none;
        display: block;
        width: 75%;
        padding: 10px 17px;
        box-sizing: border-box;
        &::-webkit-input-placeholder {
            color: #fff;
            font-size: 12px;
            font-weight: bold;
        }
    }

    // .subscribe__btn

    &__btn {
        background-color: transparent;
        border: none;
        display: block;
        width: 25%;
        padding: 10px;
        box-sizing: border-box;
        color: #fff;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 15px;
    }
}
</style>
