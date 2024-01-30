<template>
    <div>
        <h1>Nazwa statusu - {{ id }} :D</h1>
    </div>
</template>

<script setup>
const { id } = useRoute().params
</script>

<style lang="scss" scoped></style>