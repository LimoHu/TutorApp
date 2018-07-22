/** 提交mutation，来更改state中的数据状态 */
import * as types from './mutation-types';

const mutations = {
  [types.SET_TUTOR](state, tutor) {
    state.tutor = tutor;
  }
};

export default mutations;
