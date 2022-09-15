<template>
  <div class="flex p-10 gap-y-10 md:gap-x-10 flex-col md:flex-row">
    <Sections />
    <AddSectionButton />
  </div>
</template>
<script setup>
import AddSectionButton from "./components/AddSectionButton.vue";
import Sections from "./components/Sections.vue";
</script>
<style></style>
