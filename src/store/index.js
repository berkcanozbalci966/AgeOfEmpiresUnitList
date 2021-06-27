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
        selectedAge: "All",
      },
      mutations: {
        changeSelectedAge: (state, payload) => {
          state.selectedAge = payload;
        },
      },
    },
    Units: {
      namespaced: true,
      state: {
        allUnitJson: Units,
      },
      getters: {
        getUnitsByAge: (state) => (age) => {
          return age === "All"
            ? state.allUnitJson.units
            : state.allUnitJson.units.filter((unit) => unit.age === age);
        },

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
        tableFormatter: () => (unitList) => {
          return unitList.map((unit) => {
            const formattedUnit = {
              name: unit.name,
              age: unit.age,
              id: unit.id,
            };
            if (unit.cost) {
              formattedUnit.cost = Object.entries(unit.cost)
                .join(" ")
                .split(" ")
                .map((cost) => cost.replace(",", ":"))
                .join(", ");
            }
            console.log("rest", formattedUnit.cost);
            return formattedUnit;
          });
        },
      },
    },
  },
});
