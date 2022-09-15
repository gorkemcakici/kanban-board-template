<template>
  <div class="min-w-full">
    <button
      @click="addSection"
      class="flex items-center justify-center gap-x-2 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
    >
      <PlusIcon class="w-4 h-4 text-white" />Add Section
    </button>
  </div>
</template>

<script setup>
import { PlusIcon } from "@heroicons/vue/24/outline";
import { nanoid } from "nanoid";
import { useStore } from "vuex";
const store = useStore();
const addSection = () => {
  store.commit("setSections", {
    id: nanoid(),
    title: "New Section",
    items: [],
    edit: false,
  });
};
</script>

<style scoped></style>
