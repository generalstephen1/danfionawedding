import { createStore as reduxCreateStore } from "redux"
import {
  SET_WEDDING_DATE,
  UPDATE_TIMER,
  INCREMENT,
} from './const';

const initialState = {
  count: 0,
  timeUntilWedding: 0,
  weddingDate: 0,
}


const reducer = (state, action) => {
  if (!state) return initialState;
  switch (action.type){
    case INCREMENT:
      return merge(state, {
        count: state.count + 1,
      })

    case UPDATE_TIMER:
      return merge(state, {
        timeUntilWedding: state.weddingDate - new Date().getTime(),
      })

    case SET_WEDDING_DATE:
      return merge(state, {
        weddingDate: new Date('2018', '08', '17', '14'),
      })

    default:
      return state;
  }
}

const merge = (state, mergeObj) => {
  return Object.assign({}, state, mergeObj);
};

const window = window || {};
const createStore = () => reduxCreateStore(
  reducer, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default createStore
