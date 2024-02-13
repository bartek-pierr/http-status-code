<template>
    <div>
        <h1>Nazwa statusu - {{ id }} :D</h1>
    </div>
</template>

<script setup>
const { id } = useRoute().params

// if(!status.value){
//     throw createError({statusCode:404, statusMessage:'Nie ma takiego Strony :( )'})
// }

</script>

<style lang="scss" scoped></style>