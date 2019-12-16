const COMPANY_ACTION = 'COMPANY_ACTION';
const STOCK_ACTION = 'STOCK_ACTION';

export { COMPANY_ACTION, STOCK_ACTION };

export default interface IAction {
  data: any[]
  type: string;
}
