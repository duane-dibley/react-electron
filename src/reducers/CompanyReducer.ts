import { Reducer } from 'redux';
import { COMPANIES_SEARCH_SUCCESS } from '../actions';
import { IAction, ICompanyState } from '../model';

const reducer: Reducer<ICompanyState, IAction> = (state = { listOptions: [] }, action) => {

  switch (action.type) {

    case COMPANIES_SEARCH_SUCCESS:
      return Object.assign(state, { listOptions: action.data });

    default:
      return state;

  }

};

export default reducer;
