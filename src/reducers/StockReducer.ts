import { Reducer } from 'redux';
import IAction, { STOCK_ACTION } from '../actions';
import { IStockState } from '../model';

const reducer: Reducer<IStockState, IAction> = (state = { stockdata: [] }, action) => {

  switch (action.type) {

    case STOCK_ACTION:
      return state;

    default:
      return state;

  }

};

export default reducer;
