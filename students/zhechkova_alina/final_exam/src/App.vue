<template>
    <div id="app">
        <div id="nav">
            <router-link to="/" class="logo">Timex</router-link>
            <button class="open-brand" @click="openCategories"><span class="open-brand__span"></span></button>
            <nav class="categories">
            <router-link to="/all">All</router-link>
            <router-link to="/men">Men</router-link>
            <router-link to="/women">Women</router-link>
            <router-link to="/sale">Sale</router-link></nav>
        </div>
        <router-view />
    </div>
</template>
<script>
export default {
    methods: {
        openCategories() {
            const el = document.querySelector('.categories')
            el.classList.toggle('active')
        }
    }
}
</script>
<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 0;
}
.categories {
    display: flex;
    flex-direction:column;
    @media screen and (max-width:576px) {
        visibility:hidden;
        pointer-events:none;
        &.active {
            visibility:visible;
            pointer-events:all;
        }
    }
}
#nav {
    padding: 30px;
    z-index:100;
    height: 0;
    display: flex;
    flex-direction: column;
    position: absolute;
    text-align:left;
    a {
        font-weight: bold;
        color: #2c3e50;
        text-decoration:none;
        margin-bottom:10px;
           
        &.logo {
            font-size: 30px;
            margin-bottom:30px;
        }
            
        
        }
        
    
}
</style>
