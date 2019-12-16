import { Reducer } from 'redux';
import IAction, { STOCK_ACTION } from '../actions';

interface IState {
  data: any[];
}

const reducer: Reducer<IState, IAction> = (state = { data: [] }, action) => {

  switch (action.type) {

    case STOCK_ACTION:
      return state;

    default:
      return state;

  }

};

export default reducer;
