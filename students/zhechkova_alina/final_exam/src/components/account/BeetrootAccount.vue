<template>
    <div class="beetroot-account account">
        <a href="#" class="account__link">My account</a>
    </div>
</template>
<script>
export default {
    name: "beetroot-account",
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
        &::after {
            content: "";
            display: inline-block;
            height: 14px;
            margin-left: 20px;
            margin-top: 5px;
            width: 2px;
            background-color: lightgray;
        }
    }
}
</style>
