<template>
    <div class="c-partners">
        <div v-for="i in imageArray" :key="i">
            <img class="c-partners__img" :src="i" />
        </div>
    </div>
</template>
<script src="./Partners.js"></script>
<style lang="scss" src="./Partners.scss" scoped></style>
