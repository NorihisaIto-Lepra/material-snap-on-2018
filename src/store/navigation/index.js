import mutations from './mutations';
import actions   from './actions';

export const navigation = {
  namespaced: true,
  state: {
    displayFixedButton: false,
    nextPageName: '',
  },
  mutations: mutations,
  actions: actions,
};
