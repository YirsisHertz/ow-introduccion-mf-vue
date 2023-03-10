<template>
  <div class="mt-10">
    <h1 class="text-center text-6xl font-bold">Counter: {{ counter.value }}</h1>
    <div class="flex justify-center text-3xl mt-8">
      <ButtonComponent
        bg-color="red-500"
        text-color="white"
        @increase="handleIncrease(-1)"
      >
        -1
      </ButtonComponent>
      <button
        @click="reset"
        class="mx-5 bg-indigo-400 px-3 py-2 rounded-lg text-white font-bold"
      >
        Reset
      </button>
      <button
        @click="handleIncrease(+1)"
        class="mx-5 bg-green-400 px-3 py-2 rounded-lg text-black font-bold"
      >
        +1
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ButtonComponent from "./Button.vue";
import { useCounter } from "../composables/useCounter";

const { counter, handleIncrease, reset } = useCounter(0);
</script>
