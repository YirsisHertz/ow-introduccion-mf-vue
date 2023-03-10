<template>
  <h1>Computed</h1>

  El cuadrado de {{ base }} es {{ cuadrado }}
</template>

<script lang="ts" setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  base: {
    type: Number,
    required: true,
  },
});

const base: number = props.base;

const cuadrado = computed(() => {
  const resultado = base * base;

  return resultado;
});
</script>
