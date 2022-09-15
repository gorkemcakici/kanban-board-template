import { createStore } from "vuex";
import { nanoid } from "nanoid";
export default createStore({
  state: {
    sections: [],
  },
  getters: {
    getSections: (state) => state.sections,
  },
  mutations: {
    setSections(state, payload) {
      state.sections.push(payload);
    },
    deleteSection(state, payload) {
      state.sections = state.sections.filter(
        (section) => section.id != payload
      );
    },
    setSectionsItem(state, id) {
      const payload = {
        id: nanoid(),
        status: "Active",
        title: "New Task Item",
        date: Date.now(),
        bookmark: Math.floor(Math.random() * 100),
        bookmarked: false,
      };
      state.sections.forEach((item) => {
        if (id === item.id) {
          item.items.push(payload);
        }
      });
    },
    deleteSectionsItem(state, id) {
      state.sections.forEach((item) => {
        item.items = item.items.filter((element) => element.id != id);
      });
    },
  },
  actions: {},
});
