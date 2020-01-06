import IAction, { COMPANIES_FETCH, COMPANIES_FETCH_SUCCESS } from '.';

export function companiesFetch(): IAction {
  return { type: COMPANIES_FETCH };
}

export function companiesFetchSuccess(records: any): IAction {
  return { type: COMPANIES_FETCH_SUCCESS, data: records };
}
