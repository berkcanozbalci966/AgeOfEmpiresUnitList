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
        selectedCostOptions: [],
      },
      getters: {
        getUnitsByAge: (state) => (age) => {
          return age === "All"
            ? state.allUnitJson.units
            : state.allUnitJson.units.filter((unit) => unit.age === age);
        },

        getUnitByCostCategory:
          (state) =>
          (category, unitList = state.allUnitJson.units) => {
            return unitList.filter((unit) => unit.cost && unit.cost[category]);
          },
        getUnitsCostRange: () => (unitList, category) => {
          const sortedList = unitList.sort(
            (a, b) => a.cost[category] - b.cost[category]
          );
          return {
            min: sortedList[0].cost[category],
            max: sortedList[sortedList.length - 1].cost[category],
          };
        },
        // table format for table element row
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
            return formattedUnit;
          });
        },
      },
      mutations: {
        setCostOption: (state, payload) => {
          if (!state.selectedCostOptions.includes(payload)) {
            state.selectedCostOptions.push(payload);
          } else {
            state.selectedCostOptions.splice(
              state.selectedCostOptions.indexOf(payload),
              1
            );
          }
        },
      },
    },
  },
});
