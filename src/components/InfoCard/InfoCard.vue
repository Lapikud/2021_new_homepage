<template>
  <div :class="mentorCard ? 'c-grid c-grid--mentor' : 'c-grid c-grid--regular'">
    <div class="c-grid__item">
      <slot />
    </div>
    <div class="c-grid__item">
        <img class="c-grid__img" v-if="image !== null" :src="image" />
        <div class="c-grid__video" v-else>
            <iframe
            width="100%"
            height="100%"
            src="https://www.youtube-nocookie.com/embed/mUlFEO-wbPc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            ></iframe>
        </div>
    </div>
  </div>
</template>
<script src="./InfoCard.js"></script>
<style lang="scss" src="./InfoCard.scss" scoped></style>
