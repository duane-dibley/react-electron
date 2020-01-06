export const COMPANIES_FETCH = 'COMPANIES_FETCH';
export const COMPANIES_FETCH_SUCCESS = 'COMPANIES_FETCH_SUCCESS';
//
export const STOCK_ACTION = 'STOCK_ACTION';

export default interface IAction {
  data?: any[];
  type: string;
}
