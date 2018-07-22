import * as types from './mutation-types';

const mutations = {
  [types.SET_TUTOR](state, tutor) {
    state.tutor = tutor;
  }
};

export default mutations;
