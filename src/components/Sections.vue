<template>
  <draggable
    class="flex flex-col md:flex-row md:gap-x-5 gap-y-5 h-full"
    tag="div"
    :list="getSections"
    group="sections"
    item-key="name"
    :disabled="!move"
  >
    <template #item="{ element }">
      <div class="flex flex-col gap-y-5">
        <div
          class="bg-white p-2 px-5 rounded-md flex items-center justify-between w-full md:w-72"
        >
          <div>
            <input
              v-if="element.edit"
              type="text"
              v-model="element.title"
              class="border-2 border-black outline-none"
              @blur="(element.edit = false), (move = true)"
              @keyup.enter="element.edit = false,move=true"
              @focus="move = false"
            />
            <h4 v-else class="font-medium">
              <label class="cursor-pointer" @click="element.edit = true,move=false">
                {{ element.title }}
              </label>
            </h4>
          </div>
          <div class="flex gap-x-2">
            <PlusCircleIcon
              class="w-6 h-6 text-black cursor-pointer"
              @click="addNewTask(element.id)"
            />
            <TrashIcon
              class="w-6 h-6 text-black cursor-pointer"
              @click="deleteSection(element.id)"
            />
          </div>
        </div>
        <div
          v-if="element.items.length === 0"
          class="border border-gray-400 bg-gray-400 text-white p-2 cursor-pointer"
          @click="addNewTask(element.id)"
        >
          <span class="flex items-center justify-center">
            <PlusIcon class="w-4 h-4 text-white" />Add Task</span
          >
        </div>
        <SectionItems
          :items="element.items"
          :section="element"
          :addNewTask="addNewTask"
        />
      </div>
    </template>
  </draggable>
</template>

<script setup>
import { PlusCircleIcon } from "@heroicons/vue/24/outline";
import { TrashIcon } from "@heroicons/vue/24/outline";
import { PlusIcon } from "@heroicons/vue/24/outline";
import draggable from "vuedraggable";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import SectionItems from "./SectionItems.vue";
const store = useStore();
const getSections = computed(() => store.getters.getSections);
const move = ref(true);
const addNewTask = (id) => {
  store.commit("setSectionsItem", id);
};
const deleteSection = (id) => {
  store.commit("deleteSection", id);
};


</script>

<style scoped></style>