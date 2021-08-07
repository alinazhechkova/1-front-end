<template>
    <img :src="require('@/assets/' + src)" :alt="alt" :title="title" />
</template>

<script>
export default {
    name: "beetroot-image",
    props: {
        src: String,
        alt: String,
        title: String,
    },
};
</script>

<style lang="scss" scoped>
img {
    max-width: 100%;
    border: none;
    height: 100%;
    object-fit: contain;
    object-position: center;
    margin: 0;
    background: none;
}
</style>
