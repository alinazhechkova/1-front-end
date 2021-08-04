<template>
    <footer class="beetrot-footer footer">
        <div class="container footer__container">
            <div class="footer__row row">
                <h2 class="col-3 footer__logo logo">Timex</h2>
                <div class="col-6">
                    <ul class="footer__list list">
                        <li class="list__item">
                            <a href="#" class="list__link">Privacy/Security</a>
                        </li>
                        <li class="list__item">
                            <a href="#" class="list__link">Terms Of Use</a>
                        </li>
                        <li class="list__item">
                            <a href="#" class="list__link">Corporate Site</a>
                        </li>
                    </ul>
                </div>
                <p class="col-3 footer__copyright">
                    &copy; 2021 Timex.com, Inc. All Rights Reserved.
                </p>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name: "beetroot-footer",
};
</script>
<style lang="scss">
.footer {
    // .footer__container
    background-color: #222222;
    &__copyright {
        color: #8b8b8b;
        font-size: 12px;
    }
    &__container {
        padding: 40px 0;
    }

    // .footer__row

    &__row {
    }

    // .footer__logo

    &__logo {
        text-align: left;
        text-transform: uppercase;
        color: #fefefe;
        font-size: 20px;
    }

    // .footer__secondlist

    &__list {
        display: flex;
        justify-content: flex-start;
        text-align: left;
    }
}
.container {
}
.row {
}
.col-3 {
}
.logo {
}
.col-6 {
}
.list {
    // .secondlist__item

    &__item {
        list-style-type: none;
        padding: 0;
        padding: 0 13px;
    }

    // .secondlist__link

    &__link {
        color: #fcfcfc;
        text-decoration: none;
        font-size: 14px;
        font-weight: bold;
    }
}
</style>
