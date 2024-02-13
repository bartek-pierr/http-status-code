<template>
    <div>
        <header class="header">
            <nav class="header__nav container">
                <NuxtLink to="/"><img class="header__img" src="~/assets/img/logo_HttpGuru.png" alt="Logo strony HTTP Guru">
                </NuxtLink>
                <ul class="header__ul header__menuDesktop">
                    <li class="header__li">
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li class="header__li">
                        <NuxtLink to="/about">O Nas</NuxtLink>
                    </li>
                    <li class="header__li">
                        <NuxtLink to="/statuses">Statusy HTTP</NuxtLink>
                    </li>
                    <li class="header__li">
                        <NuxtLink to="/contact">Kontakt</NuxtLink>
                    </li>
                </ul>

                <div class="header__menu">
                    <div class="header__burger" @click="toggleMenu()">
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                    </div>

                    <ul id="menu" class="header__menuMobile">
                        <li class="header__li">
                            <NuxtLink to="/">Home</NuxtLink>
                        </li>
                        <li class="header__li">
                            <NuxtLink to="/about">O Nas</NuxtLink>
                        </li>
                        <li class="header__li">
                            <NuxtLink to="/statuses">Statusy HTTP</NuxtLink>
                        </li>
                        <li class="header__li">
                            <NuxtLink to="/contact">Kontakt</NuxtLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

        <section class="section">
            <div class="container">
                <slot />
            </div>
        </section>



        <footer class="footer">
            <div class="footer__author container">
                <div>
                    <NuxtLink to="/"><img class="footer__img" src="~/assets/img/logo_HttpGuru.png"
                            alt="Logo strony HTTP Guru"></NuxtLink>
                </div>
                <div class="footer__box">
                    <p><span class="footer__box--gray">@ {{ new Date().getFullYear() }} HTTP GURU</span></p>
                    <p>Bartek Pierr <span class="footer__box--gray">&&</span> Paweł Szatanik</p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
function toggleMenu() {
    const menu = document.querySelector("#menu");
    const burger = document.querySelector(".header__burger");
    menu.classList.toggle("active");
    burger.classList.toggle("active");
}
</script>


<style lang="scss" scoped>
@import '~/assets/scss/main.scss';


.header {
    background-color: $header-color;

    &__nav {
        @include display-justify-align(flex, space-between, center);
        margin: auto;
    }

    &__img {
        width: 30rem;
    }

    &__ul {
        display: flex;
        justify-content: center;
        flex-direction: row;
        gap: 4rem;
    }

    &__li {
        font-weight: bold;
        transition: .3s all;

        &:hover {
            color: $primary-color;
        }
    }

    &__menu {
        display: none;
    }

    &__menuMobile {
        position: fixed;
        width: 90%;
        top: 8.5rem;
        left: 5%;
        padding: 2rem;
        color: $black;
        background-color: $white;
        border-radius: 2rem;
        box-shadow: 1rem 1rem 0rem $black;
    }

    &__burger {
        position: relative;
        width: 3.5rem;
        height: 3rem;
        transition: transform 0.3s ease;
        cursor: pointer;
    }

    &__burger .bar {
        display: block;
        position: absolute;
        height: .3rem;
        width: 100%;
        border-radius: .9rem;
        background: $white;
        transition: transform 0.3s ease;
    }

    &__burger .bar:nth-child(1) {
        top: 0;
    }

    &__burger .bar:nth-child(2) {
        top: 50%;
        transform: translateY(-50%);
    }

    &__burger .bar:nth-child(3) {
        bottom: 0;
    }

    &__burger {
        &.active {
            .bar:nth-child(1) {
                transform: translateY(450%) rotate(45deg);
            }

            .bar:nth-child(2) {
                transform: scale(0);
            }

            .bar:nth-child(3) {
                transform: translateY(-450%) rotate(-45deg);
            }
        }
    }
}

@media(max-width:768px) {
    .header {
        position: sticky;
        top: 0;

        &__menuDesktop {
            display: none;
        }

        &__img {
            width: 20rem;
        }

        &__menu {
            display: flex;
        }

        &__nav {
            padding: 1rem 2rem;
        }

        &__li {
            padding: .25rem 0;
            font-weight: 500;
        }
    }
}

.section {
    @include display-justify-align(flex, space-between, center);
    flex-direction: column;
    margin: auto;
    padding: 25px;
}

.footer {
    border-top: .3rem solid $dark-white;
    background-color: $header-color;

    &__author {
        @include display-justify-align(flex, space-between, center);
        text-align: end;
        margin: auto;
    }

    &__box {
        &--gray {
            color: $gray;
        }
    }

    &__img {
        width: 30rem;
    }
}

@media(max-width:768px) {
    .footer {
        &__author {
            flex-direction: column;
            padding: 1.5rem;
        }

        &__box {
            text-align: center;
        }

        &__img {
            width: 25rem;
        }
    }
}
</style>