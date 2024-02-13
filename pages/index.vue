<template>
    <div class="sectionOne grid md:grid-cols-2">
        <div class="sectionOne__text">
            <h1>lorem</h1>
            <h2>lorem</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo
                consequat. Duis aute.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo
                consequat. Duis aute.
            </p>
            <div class="sectionOne__button">
                <NuxtLink to="/"><button class="sectionOne__text--btn">lorem</button></NuxtLink>
            </div>
        </div>
        <div class="sectionOne__img">
            <img src="" alt="Zdjęcie które tutaj ma">
        </div>
    </div>

    <div class="sectionTwo">
        <h3>Rodzaje Statusów :</h3>
        <div class="sectionTwo__box grid md:grid-cols-3 gap-3">
            <div class="sectionTwo__boxes sectionTwo__boxes--one">
                <div class="sectionTwo__infoBox">
                    <h4>1XX</h4>
                    <h5>Informacyjne</h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, amet dicta labore facere repudiandae
                        eius,
                        quasi molestiae enim ratione error deleniti et ducimus quo accusantium optio inventore quod qui
                        nihil.
                    </p>
                </div>
            </div>
            <div class="sectionTwo__boxes sectionTwo__boxes--two">
                <div class="sectionTwo__infoBox">
                    <h4>2XX</h4>
                    <h5>Sukcess</h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, amet dicta labore facere repudiandae
                        eius,
                        quasi molestiae enim ratione error deleniti et ducimus quo accusantium optio inventore quod qui
                        nihil.
                    </p>
                </div>
            </div>
            <div class="sectionTwo__boxes sectionTwo__boxes--three">
                <div class="sectionTwo__infoBox">
                    <h4>3XX</h4>
                    <h5>Przekierowania</h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, amet dicta labore facere repudiandae
                        eius,
                        quasi molestiae enim ratione error deleniti et ducimus quo accusantium optio inventore quod qui
                        nihil.
                    </p>
                </div>
            </div>
            <div class="sectionTwo__boxes sectionTwo__boxes--four">
                <div class="sectionTwo__infoBox">
                    <h4>4XX</h4>
                    <h5>Błędy aplikacji</h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, amet dicta labore facere repudiandae
                        eius,
                        quasi molestiae enim ratione error deleniti et ducimus quo accusantium optio inventore quod qui
                        nihil.
                    </p>
                </div>
            </div>
            <div class="sectionTwo__boxes sectionTwo__boxes--five">
                <div class="sectionTwo__infoBox">
                    <h4>5XX</h4>
                    <h5>Błędy serwera</h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, amet dicta labore facere repudiandae
                        eius,
                        quasi molestiae enim ratione error deleniti et ducimus quo accusantium optio inventore quod qui
                        nihil.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="sectionThree">

    </div>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/main.scss';

.sectionThree {
    height: 100vh;
}

.sectionTwo {
    h3 {
        text-align: center;
        margin: 2rem 0rem;
        text-shadow: .5rem .5rem 0px $black;
    }

    &__boxes {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 40rem;
        border-radius: 2.5rem;
        box-shadow: .6rem .6rem 0rem $black;

        &--one {
            background-color: $orange;
        }

        &--two {
            background-color: $green;
        }

        &--three {
            background-color: $gray;
        }

        &--four {
            background-color: $blue;
        }

        &--five {
            background-color: $red;
        }
    }

    &__infoBox {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        text-align: center;
        flex-direction: column;
        height: 100%;
        padding: 1rem;

        h4 {
            color: $white;
            font-size: 8rem;
            text-shadow: .5rem .5rem 0rem $black;
        }

        h5 {
            color: $white;
            font-size: 4rem;
            text-shadow: .3rem .3rem .2rem $black;
        }
    }
}

@media(max-width:1024px) {
    .sectionTwo {
        height: 100%;

        h3 {
            font-size: 3.6rem;
        }

        &__infoBox {
            h4 {
                color: $white;
                font-size: 5rem;
                text-shadow: .3rem .3rem 0rem $black;
            }

            h5 {
                color: $white;
                font-size: 2.6rem;
                text-shadow: .2rem .2rem .2rem $black;
            }
        }
    }
}

.sectionOne {
    align-items: center;
    height: 90vh;

    &__text {
        display: flex;
        flex-direction: column;

        &--btn {
            padding: 1.5rem 3rem;
            font-size: 3rem;
            border-radius: 3rem;
            color: $black;
            font-weight: bold;
            box-shadow: .8rem .8rem 0px $black;
            background-color: $green;
            transition: .3s all;

            &:hover {
                background-color: $dark-white;
            }
        }

        p {
            padding: 3rem 0;
        }
    }

    &__img {
        height: 50rem;
        width: 100%;
        margin: 2rem;
        background-color: $gray;
    }
}

@media(max-width:1024px) {
    .sectionOne {
        display: flex;
        flex-direction: column;
        height: 100%;

        &__text {
            h1 {
                font-size: 6rem;
                text-align: center;
            }

            h2 {
                font-size: 5rem;
                text-align: center;
            }

            p {
                text-align: center;
                padding: 2rem 0;
            }
        }

        &__button {
            @include display-justify-align(flex, center, center);
        }
    }
}
</style>

