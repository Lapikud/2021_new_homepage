<template>
  <div class="l-container">
    <div v-for="stream in streams" :key="stream">
      <a :href="stream.href" target="_blank">
        <img class="c-video" :src="stream.video" :alt="stream.alt" />
      </a>
    </div>
  </div>
</template>
<script src="./Stream.js" />
<style lang="scss" src="./Stream.scss" scoped />
