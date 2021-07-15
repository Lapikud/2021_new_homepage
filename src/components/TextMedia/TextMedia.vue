<template>
    <div class="c-textmedia" :class="imgPosition == 'right' ? 'c-textmedia--img-right' : ''">
        <div class="c-textmedia__img-container">
            <v-slider v-if="images.length > 1" :images="images"/>
            <img v-if="images.length <= 1" class="c-textmedia__img" :src="images[0] ? 'https://kitchen-guide.admdev.eu/backend/uploads/' + images[0].filename : require('@/assets/images/placeholder.jpg')" />
        </div>
        <div class="c-textmedia__text-container">
            <div class="c-textmedia__text">
                <h2 class="c-textmedia__heading">
                    {{ heading }}
                </h2>
                <p class="c-textmedia__content">
                    {{ content }}
                </p>
            </div>
        </div>
    </div>
</template>
<script src="./TextMedia.js"></script>
<style lang="scss" src="./TextMedia.scss" scoped></style>
