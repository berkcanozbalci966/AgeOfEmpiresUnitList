import Units from "@/assets/age-of-empires-units";
const state = () => ({
  allUnitJson: Units,
  selectedCostOptions: [],
});

const getters = {
  getUnitsByAge: (state) => (age) => {
    return age === "All"
      ? state.allUnitJson.units
      : state.allUnitJson.units.filter((unit) => unit.age === age);
  },

  getUnitByCostCategory:
    (state) =>
    (category, unitList = state.allUnitJson.units) => {
      const { costcategory, costRange } = category;
      if (costRange) {
        return unitList.filter((unit) => unit.cost && unit.cost[costcategory]);
      }
      return unitList.filter((unit) => unit.cost && unit.cost[costcategory]);
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
  getUnitsByCost: () => (payload) => {
    const { unitList, selectedOption } = payload;
    const { costcategory, costRange } = selectedOption;
    console.log(typeof costRange);
    return unitList.filter((unit) => unit.cost[costcategory] >= costRange);
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
  unitsExportToTable: (state, getters) => (age) => {
    const selectedOptions = state.selectedCostOptions;
    const filteredUnitsByAge = getters.getUnitsByAge(age);

    if (selectedOptions.length === 0) {
      return filteredUnitsByAge;
    } else if (selectedOptions.length === 1) {
      const optionone = getters.getUnitByCostCategory(
        selectedOptions[0],
        filteredUnitsByAge
      );

      const singleOption = getters.getUnitsByCost({
        unitList: optionone,
        selectedOption: selectedOptions[0],
      });

      return singleOption;
    } else if (selectedOptions.length === 2) {
      const optionone = getters.getUnitByCostCategory(
        selectedOptions[0],
        filteredUnitsByAge
      );
      const singleOption = getters.getUnitsByCost({
        unitList: optionone,
        selectedOption: selectedOptions[0],
      });

      const doubleOption = getters.getUnitsByCost({
        unitList: singleOption,
        selectedOption: selectedOptions[1],
      });

      return doubleOption;
    }

    const optionone = getters.getUnitByCostCategory(
      selectedOptions[0],
      filteredUnitsByAge
    );
    const singleOption = getters.getUnitsByCost({
      unitList: optionone,
      selectedOption: selectedOptions[0],
    });

    const doubleOption = getters.getUnitsByCost({
      unitList: singleOption,
      selectedOption: selectedOptions[1],
    });

    const tripleOption = getters.getUnitsByCost({
      unitList: doubleOption,
      selectedOption: selectedOptions[2],
    });
    return tripleOption;
  },
  getUnitByID: (state) => (id) => {
    return state.allUnitJson.units.filter((unit) => unit.id === Number(id))[0];
  },
};

const actions = {};

const mutations = {
  setCostOption: (state, payload) => {
    if (
      !state.selectedCostOptions.find(
        (unit) => unit.costcategory === payload.costcategory
      )
    ) {
      state.selectedCostOptions.push(payload);
    } else {
      state.selectedCostOptions.splice(
        state.selectedCostOptions.findIndex(
          (option) => option.costcategory === payload.costcategory
        ),
        1
      );
    }
    console.log(state.selectedCostOptions);
  },
  changeCost: (state, payload) => {
    console.log(state.selectedCostOptions, payload);
    state.selectedCostOptions.find(
      (unit) => unit.costcategory === payload.costcategory
    ).costRange = payload.costRange;
  },
  clearFilters: (state) => {
    state.selectedCostOptions = [];
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
