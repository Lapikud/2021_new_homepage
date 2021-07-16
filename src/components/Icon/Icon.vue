<template>
    <svg class="c-icon" :class="[placement=='before' ? 'c-icon--before' : placement=='after' ? 'c-icon--after' : '',
        size=='12' ? 'c-icon--small' : size=='24' ? 'c-icon--large' : size=='40' ? 'c-icon--xl' : size=='150' ? 'c-icon--xxl' : '', color=='orange' ? 'c-icon--orange' : '']">
        <use :xlink:href="`${spritePath}#icon-${type}`"></use>
    </svg>
</template>
<script src="./Icon.js"></script>
<style lang="scss" src="./Icon.scss" scoped></style>
