import IAction, { COMPANY_ACTION } from '.';

export function companyAction(): IAction {
  return { type: COMPANY_ACTION, data: [] };
}
