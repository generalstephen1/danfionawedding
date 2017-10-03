import {
  SET_WEDDING_DATE,
  UPDATE_TIMER,
  INCREMENT,
} from './const';

export const incrementAction = () => {
    return { type: INCREMENT };
};

export const updateTimerAction = () => {
    return { type: UPDATE_TIMER };
};

export const setWeddingDateAction = () => {
    return { type: SET_WEDDING_DATE };
};

