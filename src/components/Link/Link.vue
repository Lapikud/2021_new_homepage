<template>
    <a :href="url" class="c-link c-link--underline" :target="newTab ? '_blank' : '_self'" :rel="newTab ? 'noopener' : ''">
        <v-icon placement="before" :type="icon" :size="iconSize"></v-icon>
        <span>{{ text }}</span>
    </a>
</template>
<script src="./Link.js"></script>
<style lang="scss" src="./Link.scss" scoped></style>
