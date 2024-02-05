<template>
    <Header />

    <div class="main">
        <h1>Mamy to kurcze :D</h1>
    </div>

    <Footer />
</template>

<script>
import Header from './layouts/Header.vue';
import Footer from './layouts/Footer.vue';

export default {
    name: 'index',
    components: {
        Header,
        Footer,
    }
}
</script>

<style lang="scss" scoped>
    .main {
        height: 100vh;
    }
</style>

