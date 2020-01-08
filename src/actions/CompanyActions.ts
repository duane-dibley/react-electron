import IAction, { COMPANIES_SEARCH } from '.';

export function companiesSearch(): IAction {
  return { type: COMPANIES_SEARCH, data: null };
}
