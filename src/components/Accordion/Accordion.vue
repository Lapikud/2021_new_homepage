<template>
  <div>
    <!-- <div> -->
    <div :class="openState ? 'c-accordion-item open' : 'c-accordion-item'">
      <div class="c-accordion-item__header" v-on:click="toggleOpen"><h4 class="u-h4 u-mb-0 c-accordion-item__title">{{ title }}</h4></div>
      <div class="c-accordion-item__content"><slot /></div>
    </div>
    <!-- </div> -->
  </div>
</template>
<script src="./Accordion.js"></script>
<style lang="scss" src="./Accordion.scss" scoped></style>
