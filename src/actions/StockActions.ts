import IAction, { STOCK_ACTION } from '.';

export function stockAction(): IAction {
  return { type: STOCK_ACTION, data: [] };
}
