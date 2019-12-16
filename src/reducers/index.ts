import { combineReducers } from 'redux';
import company from './CompanyReducer';
import stock from './StockReducer';

const rootReducer = combineReducers(
  { company, stock }
);

export default rootReducer;
