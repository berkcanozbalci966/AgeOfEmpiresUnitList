import { createStore } from "vuex";
import Units from "./modules/units";
import Age from "./modules/age";
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Age,
    Units,
  },
});
