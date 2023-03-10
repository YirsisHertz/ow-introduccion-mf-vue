<template>
  <button @click="$emit('increase', 1)" :class="className">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
const props = defineProps({
  bgColor: {
    type: String,
    required: true,
  },
  textColor: {
    type: String,
    required: true,
  },
});

const className: string = `mx-5 bg-${props.bgColor} px-3 py-2 rounded-lg text-${props.textColor} font-bold`;
</script>
