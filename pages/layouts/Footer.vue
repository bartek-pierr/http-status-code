<template>
    <footer class="footer wrapper">
        <div class="footer__info">
            <div class="footer__text toNieJestTailWind">
                <h3>HTTP GURU</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem nam commodi soluta molestias
                    necessitatibus minus, quisquam excepturi eveniet temporibus tenetur deleniti placeat iusto repudiandae
                    hic. Unde rem voluptatem exercitationem commodi.</p>
            </div>
            <div class="footer__logo toNieJestTailWind">
                <a href="/"><img src="~/assets/img/logo_httpGURU.png" alt="Logo strony HTTP Guru"
                        class="footer__logo--img"></a>
            </div>
            <div class="footer__text toNieJestTailWind">
                <h3>HTTP GURU</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem nam commodi soluta molestias
                    necessitatibus minus, quisquam excepturi eveniet temporibus tenetur deleniti placeat iusto repudiandae
                    hic. Unde rem voluptatem exercitationem commodi.</p>
            </div>
        </div>
        <div class="footer__authors">
            <p>Strona utworzona przez Bartek Pierr <span class="footer__authors--sign">&&</span> Paweł Szatanik | {{ new
                Date().getFullYear() }}</p>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/main.scss';

.footer__info {
    @include display-justify-align-flex(flex, space-between, center, row);
    gap: 25px;
}

.footer__logo {
    @include display-justify-align-flex(flex, center, center, row);
}

.footer__logo--img {
    @include width-height(100%, 200px);
}

.footer__authors {
    @include display-justify-align(flex, center, center);
    padding: 10px;
}

.footer__authors--sign {
    font-weight: 600;
    color: $primary-color;
}

.toNieJestTailWind {
    // To jest chwilowe ...
    width: 100%;
}
</style>