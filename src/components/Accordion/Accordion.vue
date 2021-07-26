<template>
  <div>
    <!-- <div> -->
    <div :class="openState ? 'c-accordion-item open' : 'c-accordion-item'">
      <div class="header" v-on:click="toggleOpen">{{ title }}</div>
      <div :class="list ? 'content list' : 'content'"><slot /></div>
    </div>
    <!-- </div> -->
  </div>
</template>
<script src="./Accordion.js"></script>
<style lang="scss" src="./Accordion.scss" scoped></style>
