import { Reducer } from 'redux';
import IAction, { COMPANY_ACTION } from '../actions';

interface IState {
  data: [];
}

const reducer: Reducer<IState, IAction> = (state = { data: [] }, action) => {

  switch (action.type) {

    case COMPANY_ACTION:
      return state;

    default:
      return state;

  }

};

export default reducer;
