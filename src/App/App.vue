<template>
    <div>
        <v-header />
        <router-view :key="$route.fullPath" />
    </div>
</template>
<script src="./App.js"></script>
<style lang="scss">
@import "@/assets/scss/global.scss";
</style>
