<template>
    <a :class="[
                    variation ? 'c-btn' : '',
                    variation == 'primary' ? 'c-btn--primary' : variation == 'secondary' ? 'c-btn--secondary' : ''
                ]"
                :href="href">
        <span>{{ text }}</span>
        <slot></slot>
    </a>
</template>
<script src="./Button.js"></script>
<style lang="scss" src="./Button.scss" scoped></style>
