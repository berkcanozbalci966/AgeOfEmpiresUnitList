import { createStore } from "vuex";
import Units from "@/assets/age-of-empires-units";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Age: {
      namespaced: true,
      state: {
        ageList: ["All", "Dark", "Feudal", "Castle", "Imperial"],
      },
    },
    Units: {
      namespaced: true,
      state: {
        allUnitJson: Units,
      },
      getters: {
        getUnitByCostCategorie: (state) => (categorie) => {
          console.log(categorie);
          return state.allUnitJson.units.filter(
            (unit) => unit.cost && unit.cost[categorie]
          );
        },
        getUnitsCostRange: () => (unitList, categorie) => {
          const sortedList = unitList.sort(
            (a, b) => a.cost[categorie] - b.cost[categorie]
          );
          return {
            min: sortedList[0].cost[categorie],
            max: sortedList[sortedList.length - 1].cost[categorie],
          };
        },
      },
    },
  },
});
