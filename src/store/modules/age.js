const state = () => ({
  ageList: ["All", "Dark", "Feudal", "Castle", "Imperial"],
  selectedAge: "All",
});

const mutations = {
  changeSelectedAge: (state, payload) => {
    state.selectedAge = payload;
  },
};

export default {
  namespaced: true,
  mutations,
  state,
};
