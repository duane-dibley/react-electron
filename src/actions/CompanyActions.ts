import IAction, { COMPANIES_FETCH, COMPANIES_FETCH_SUCCESS } from '.';

export function companiesFetch(): IAction | void {
  return { type: COMPANIES_FETCH };
  //
  // const xhr = new XMLHttpRequest();

  // xhr.open('GET', 'https://api.companieshouse.gov.uk/search?q=test', true);
  // xhr.onreadystatechange = () => {
  //   if (xhr.readyState === 4) {
  //     if (xhr.status === 200 || xhr.status === 0) {
  //       return { type: COMPANIES_FETCH_SUCCESS, data: [] };
  //     } else {
  //       console.error('companies_fetch_failed');
  //     }
  //   }
  // };

  // xhr.setRequestHeader('Authorization', 'Basic a2tUeFloNE10eUpYRHZGVF9IQmtabmJTNXBQb1dGQzZGYmNiX28tMQ==');

  // xhr.send(null);

  // return { type: COMPANIES_FETCH_SUCCESS, data: [] };
}

export function companiesFetchSuccess(records: any): IAction {
  return { type: COMPANIES_FETCH_SUCCESS, data: records };
}
