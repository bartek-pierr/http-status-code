<template>
    <nav class="nav wrapper">
        <div class="nav__logo">
            <a href="/"><img src="~/assets/img/logo_httpGURU.png" alt="Logo strony HTTP Guru" class="nav__logo--img"></a>
        </div>
        <div class="nav__list">
            <a href="/" class="nav__list--element">Home</a>
            <a href="/" class="nav__list--element">O nas</a>
            <a href="/" class="nav__list--element">Kontakt</a>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/main.scss';

.nav {
    @include display-justify-align-flex(flex, space-between, center, row);
    position: sticky;
    top: 0;
    padding: 10px 0;
}

.nav__logo--img {
    @include width-height(100%, 100px);
}

.nav__list {
    @include display-justify-align-flex(flex, center, center, row);
    gap: 20px;
}

.nav__list--element {
    font-weight: 600;
    transition: all .3s;

    &:hover {
        color: $primary-color;
    }
}
</style>