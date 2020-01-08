import { combineReducers, Reducer } from 'redux';
import { IAppState } from '../model';
import company from './CompanyReducer';
import stock from './StockReducer';

const rootReducer: Reducer<IAppState> = combineReducers(
  { company, stock }
);

export default rootReducer;
