<template>
    <div>
        <header class="shadow-sm bg-black">
            <nav class="container mx-auto p-4 flex justify-between items-center">
                <NuxtLink><img src="~/assets/img/logo_httpGURU.png" alt="Logo strony HTTP Guru" class="w-96"></NuxtLink>
                <ul class="flex gap-4">
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">O nas</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/statuses">Statusy HTTP</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contact">Kontakt</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>

        <div class="container mx-auto p-4">
            <slot />
        </div>

        <footer class="container mx-auto p-4 flex justify-between border-t-2 flex-col items-center">
            <div class="flex">
                <div>
                    <NuxtLink><img src="~/assets/img/logo_httpGURU.png" alt="Logo strony HTTP Guru"></NuxtLink>
                </div>
                <div>
                    <h3>HTTP GURU</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem nam commodi soluta molestias
                        necessitatibus minus, quisquam excepturi eveniet temporibus tenetur deleniti placeat iusto
                        repudiandae
                        hic. Unde rem voluptatem exercitationem commodi.</p>
                </div>

            </div>
            <div class="flex">
                <p>Strona utworzona przez Bartek Pierr <span>&&</span> Paweł Szatanik | {{ new
                    Date().getFullYear() }}</p>
            </div>
        </footer>
    </div>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/main.scss';
</style>