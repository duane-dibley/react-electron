import { COMPANIES_SEARCH } from '.';
import { IAction } from '../model';

export function companiesSearch(): IAction {
  return { type: COMPANIES_SEARCH };
}
