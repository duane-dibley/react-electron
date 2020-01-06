import { Reducer } from 'redux';
import IAction, { COMPANIES_FETCH_SUCCESS } from '../actions';

interface IState {
  data: [];
}

const reducer: Reducer<IState, IAction> = (state = { data: [] }, action) => {

  switch (action.type) {

    case COMPANIES_FETCH_SUCCESS:
      console.log('COMPANIES_FETCH_SUCCESS', { action });
      return state;

    default:
      return state;

  }

};

export default reducer;
