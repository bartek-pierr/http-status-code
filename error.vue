<template>
    <div class="mt-7 max-w-sm mx-auto text-center card">
        <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
        <p class="mt-7 text-6xl">Ups XD</p>
        <p class="mt-7">{{ error.message }}</p>
        <button class="btn-my-7" @click="handleClearError">W szafie śpisz ?</button>
    </div>
</template>

<script setup>
defineProps(['error'])

const handleClearError = () => {
    clearError({ redirect: '/' })
}
</script>

<style lang="scss" scoped>
button {
    margin-top: 20px;
    font-size: 2rem;
    padding: 10px;
    border: solid red;
}
</style>