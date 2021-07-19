<template>
  <div class="l-container">
    <div v-for="(content, i) in contents" :key="i" :open="content.open">
      <div
        :class="content.open ? 'c-accordion-item open' : 'c-accordion-item'"
        @click="toggleOpen(i)"
      >
        <div class="question">{{ content.question }}</div>
        <div class="answer">{{ content.answer }}</div>
      </div>
    </div>
  </div>
</template>
<script src="./Accordion.js"></script>
<style lang="scss" src="./Accordion.scss" scoped></style>
