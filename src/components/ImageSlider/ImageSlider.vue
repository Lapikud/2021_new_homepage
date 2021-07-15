<template>
  <div class="c-slider">
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :style="`height: ${height}`" :src="currentImg" />
      </div>
    </transition-group>
    <a class="prev" @click.prevent="prev" href="#">
        <v-icon placement="before" type="chevron-left" size="24"></v-icon>
    </a>
    <a class="next" @click.prevent="next" href="#">
        <v-icon placement="before" type="chevron-right" size="24"></v-icon>
    </a>
  </div>
</template>
<script src="./ImageSlider.js"></script>
<style lang="scss" src="./ImageSlider.scss" scoped></style>
