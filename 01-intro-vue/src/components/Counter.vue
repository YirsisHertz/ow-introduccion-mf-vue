<template>
  <h1>Counter - {{ counter.count }}</h1>
  <button @click="handleIncrease">+1</button>
  <button @click="reset">Reset</button>
</template>

<script lang="ts" setup>
import { useCounter } from "../composables/useCounter";

const { counter, handleIncrease, reset } = useCounter(5);
</script>

<style scoped>
button {
  margin: 0 1rem;
  cursor: pointer;
}
</style>
