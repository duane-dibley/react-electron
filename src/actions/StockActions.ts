import { STOCK_ACTION } from '.';
import { IAction } from '../model';

export function stockAction(): IAction {
  return { type: STOCK_ACTION };
}
