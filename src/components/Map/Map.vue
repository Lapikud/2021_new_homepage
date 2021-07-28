<template>
  <l-map :zoom="zoom" :center="center" style="height: 500px; width: 100%">
    <l-tile-layer :url="url" :attribution="attribution" />
    <l-marker :lat-lng="marker"> </l-marker>
  </l-map>
</template>
<script src="./Map.js"></script>
<style lang="scss" src="./Map.scss" scoped></style>
