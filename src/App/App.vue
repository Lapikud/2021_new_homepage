<template>
    <div>
        <div id="fb-root"></div>
        <v-header />
        <router-view :key="$route.fullPath" />
        <v-footer />
    </div>
</template>
<script src="./App.js"></script>
<style lang="scss">
@import "@/assets/scss/global.scss";
</style>
