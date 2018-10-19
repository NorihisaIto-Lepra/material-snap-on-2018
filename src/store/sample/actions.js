export default {
  setExtended ({ commit }, value) {
    console.log(value);
    commit('setExtended', value);
  },
}