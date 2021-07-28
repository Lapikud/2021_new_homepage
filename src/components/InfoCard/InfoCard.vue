<template>
  <div :class="mentorCard ? 'c-grid c-grid--mentor' : 'c-grid'">
    <div>
      <slot />
    </div>
    <img v-if="image !== null" :src="image" />
    <iframe
      v-else
      width="100%"
      height="100%"
      src="https://www.youtube-nocookie.com/embed/mUlFEO-wbPc"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>
<script src="./InfoCard.js"></script>
<style lang="scss" src="./InfoCard.scss" scoped></style>
