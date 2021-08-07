<template>
    <div class="beetroot-main shop">
        <beetroot-header />
        <main class="shop__main">
            <beetroot-hero-slider class="hero" />
            <beetroot-explore />
            <beetroot-catalog />
            <beetroot-collections />
            <beetroot-popular />
            <beetroot-subscribe />
        </main>
        <beetroot-footer />
    </div>
</template>

<script>
import BeetrootHeroSlider from "./hero/BeetrootHeroSlider.vue";
import BeetrootCatalog from "./catalog/BeetrootCatalog.vue";
import BeetrootExplore from "./BeetrootExplore.vue";
import BeetrootSubscribe from "./BeetrootSubscribe.vue";
import BeetrootPopular from "./BeetrootPopular.vue";
import BeetrootCollections from "./BeetrootCollections.vue";
import BeetrootHeader from "./BeetrootHeader.vue";
import BeetrootFooter from "./BeetrootFooter.vue";
export default {
    components: {
        BeetrootCatalog,
        BeetrootSubscribe,
        BeetrootPopular,
        BeetrootExplore,
        BeetrootHeader,
        BeetrootHeroSlider,
        BeetrootCollections,
        BeetrootFooter,
    },
    name: "beetroot-main",
    methods: {},
};
</script>

<style lang="scss">
.shop {
}

.hero {
    background-color: #ecebf0;
}
.beetroot-main {
    @media screen and (max-width: 768px) {
        position: relative;
    }
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
</style>
