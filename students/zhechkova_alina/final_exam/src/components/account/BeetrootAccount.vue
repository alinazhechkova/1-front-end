<template>
    <div class="beetroot-account">
        <button class="account__link" @click="openAccountForm">
            <font-awesome-icon icon="user" />
        </button>
        <div class="modal-window form__window" ref="formWindow">
            <div class="form__header modal-window__header">
                <h3 class="modal-window__title form__title">Log in</h3>
                <button
                    @click="closeAccountForm"
                    type="button"
                    class="form__close modal-window__btn"
                    id="closeAccountForm"
                >
                    X
                </button>
            </div>
            <div class="form__main mt-4">
                <div class="row">
                    <div class="col-sm-6 mx-auto">
                        <form class="form-register">
                            <div class="mb-3">
                                <label
                                    for="exampleInputEmail1"
                                    class="form-label"
                                    >Email address</label
                                >
                                <input
                                    type="email"
                                    class="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                />
                                <div id="emailHelp" class="form-text">
                                    We'll never share your email with anyone
                                    else.
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="InputPassword1" class="form-label"
                                    >Password</label
                                >
                                <input
                                    type="password"
                                    class="form-control"
                                    id="InputPassword1"
                                />
                            </div>
                            <div class="mb-3 form-check">
                                <input
                                    type="checkbox"
                                    class="form-check-input"
                                    id="Check1"
                                />
                                <label
                                    class="form-check-label"
                                    for="Check1"
                                    >Check me out</label
                                >
                            </div>
                            <button type="button" class="brand__btn">
                                <span class="brand__btn-span"> Log me in </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "beetroot-account",
    methods: {
        openAccountForm() {
            this.$refs.formWindow.classList.add("active");
            document.bode.classList.add("fixed");
        },
        closeAccountForm() {
            this.$refs.formWindow.classList.remove("active");
            document.bode.classList.remove("fixed");
        },
    },
};
</script>
<style lang="scss">
.account {
    &__link {
        text-decoration: none;
        text-transform: uppercase;
        color: #000;
        font-size: 14px;
        font-weight: bold;
        border: none;
        background: transparent;
        &::after {
            content: "";
            display: inline-block;
            height: 14px;
            margin-left: 15px;
            width: 2px;
            background-color: lightgray;
        }
    }
}
.form {
    &__window {
        visibility: hidden;
        pointer-events: none;
        transform: translateX(-2500px);
        transition: transform 0.5s ease;
        &.active {
            visibility: visible;
            pointer-events: all;
            transform: translateX(0);
            overflow-y: auto;
        }
    }
}
.form-register {
    text-align: left;
}
</style>
