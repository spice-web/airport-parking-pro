<template>
  <h2 class="c-title__page">{{ mainTitle }}<span>{{ subTitle }}</span></h2>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  mainTitle: {
    type: String,
    required: true
  },
  subTitle: {
    type: String,
    required: true
  }
});
</script>

<style scoped land="scss">
.c-title__page {
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 3rem;
  margin-bottom: 4rem;
  text-align: center;
  letter-spacing: .1em;
}

.c-title__page span {
  display: block;
  font-weight: normal;
  font-size: 0.875rem;
  margin-top: 0.5rem;
}

@media  screen and (min-width: 850px) {
  .c-title__page {
    font-size: 40px;
  }
  .c-title__page span {
    font-size: 22px;
    margin-top: 1rem;
  }
}
</style>