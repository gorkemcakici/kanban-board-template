<template>
  <draggable
    class="flex flex-col gap-y-5 h-full"
    tag="div"
    :list="items"
    group="sectionsItems"
    item-key="name"
  >
    <template #item="{ element }">
      <div class="bg-white p-4 rounded-sm flex flex-col gap-y-4">
        <div class="flex justify-between">
          <span
            class="p-1 rounded-sm text-white text-xs"
            :class="[
              element.status === 'Confirmed' ? 'bg-purple-900' : '',
              element.status === 'Cancelled' ? 'bg-red-600' : '',
              element.status === 'On Hold' ? 'bg-gray-600' : '',
              element.status === 'Active' ? 'bg-gray-700' : '',
              element.status === 'Completed' ? 'bg-green-600' : '',
              element.status === 'Pending' ? 'bg-yellow-600' : '',
            ]"
            >{{ element.status }}</span
          >
          <span>
            <Menu as="div" class="relative inline-block text-left">
              <div>
                <MenuButton>
                  <EllipsisVerticalIcon class="w-6 h-6 text-black" />
                </MenuButton>
              </div>

              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                      <a
                        @click="deleteSectionsItem(element.id)"
                        :class="[
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm',
                        ]"
                        class="cursor-pointer"
                        >Delete</a
                      >
                    </MenuItem>
                  </div>
                </MenuItems>
              </transition>
            </Menu>
          </span>
        </div>
        <div>
          {{ element.title }}
        </div>
        <div class="flex justify-between">
          <span class="text-xs opacity-70">{{ element.date }}</span>
          <div class="flex items-center justify-center gap-x-2">
            <span class="text-sm opacity-80">{{ element.bookmark }}</span>
            <span class="cursor-pointer">
              <BookmarkIcon
                v-if="element.bookmarked === false"
                class="w-4 h-4"
              />
              <BookmarkedIcon v-else class="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    </template>
  </draggable>
</template>

<script setup>
import draggable from "vuedraggable";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { EllipsisVerticalIcon } from "@heroicons/vue/24/outline";
import { BookmarkIcon } from "@heroicons/vue/24/outline";
import { BookmarkIcon as BookmarkedIcon } from "@heroicons/vue/24/solid";

import { useStore } from "vuex";

const props = defineProps({
  items: Array,
  section: Object,
  addNewTask: Function,
});
const store = useStore();

const deleteSectionsItem = (id) => {
  store.commit("deleteSectionsItem", id);
};
</script>

<style scoped></style>