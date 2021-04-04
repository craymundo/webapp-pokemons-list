<template>
  <img src="../assets/loader.svg" class="loader" />
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Loader extends Vue {}
</script>
<style lang="css" scoped>
.loader {
  animation: swing 2s infinite ease-in-out;
}

@keyframes swing {
  0%,
  100% {
    transform: rotate(-180deg);
  }
  20% {
    transform: scale(0.95);
  }
  50% {
    transform: rotate(180deg);
  }
  80% {
    transform: scale(0.95);
  }
}
</style>
