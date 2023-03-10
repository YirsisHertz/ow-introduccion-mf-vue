<template>
  <h1>Users</h1>
  <ol>
    <li v-for="(user, index) in users" :key="index">
      {{ user.name }}
    </li>
  </ol>
</template>

<script setup lang="ts">
import type { Ref } from "vue";

import { onMounted, ref } from "vue";

const users: Ref<any[]> = ref([]);

const getUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  users.value = data;
};

onMounted(() => {
  getUsers();
});
</script>
