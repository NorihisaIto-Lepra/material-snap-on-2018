import mutations from './mutations';
import actions   from './actions';

export const sample = {
  namespaced: true,
  state: {
    extended: false,
  },
  mutations: mutations,
  actions: actions,
};
