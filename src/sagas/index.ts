import { all, AllEffect, call, CallEffect, put, PutEffect, takeEvery, takeLatest } from 'redux-saga/effects';
import { COMPANIES_SEARCH, COMPANIES_SEARCH_SUCCESS } from '../actions';
import headers from './headers';

function* search(): Generator<any, any, any> {
  yield takeLatest(
    COMPANIES_SEARCH,
    companiesSearch
  );
}

//

function* searchCompanies(params: any): Generator<any, any, any> {
  return yield fetch('https://api.companieshouse.gov.uk/search?q=test', { headers })
    .then(res => res.json())
    .catch(err => console.error('companiesSearch catch', err));
}

//

function* companiesSearch(): Generator {
  let response: any;

  try {
    // GET https://api.companieshouse.gov.uk/search
    // GET https://api.companieshouse.gov.uk/search/companies
    // GET https://api.companieshouse.gov.uk/search/officers
    // GET https://api.companieshouse.gov.uk/search/disqualified-officers

    // const response: any = yield call(fetch, 'https://api.companieshouse.gov.uk/search?q=test', {
    //   headers: {
    //     // 'Access-Control-Allow-Origin': '*',
    //     authorization: 'RgLMHWQ3NsjYufoQ49baXO4DA5w_6QRCxpCezx6V'
    //   }
    // });

    response = yield call(searchCompanies, { q: 'test' });
  } catch (e) {
    // TODO - set default error handler
    // yield put(fetchFailed(e));
    console.error('companies_fetch_failed');
    return;
  }

  yield put({ type: COMPANIES_SEARCH_SUCCESS, data: response.items });
}

export default function* rootSaga(): Generator<any, any, any> {
  yield all([
    search()
  ]);
}

// https://hackernoon.com/moving-api-requests-to-redux-saga-21780f49cbc8 - BASIC
// https://medium.com/@lavitr01051977/make-your-first-call-to-api-using-redux-saga-15aa995df5b6
