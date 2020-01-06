import { all, AllEffect, call, CallEffect, put, PutEffect, takeEvery, takeLatest } from 'redux-saga/effects';
import { COMPANIES_FETCH } from '../actions';
import { companiesFetchSuccess } from '../actions/CompanyActions';

function* onCompaiesSearch(): Generator<any, void, unknown> {
  yield takeLatest(
    COMPANIES_FETCH,
    onFetchCompanies
  );
}

function* onFetchCompanies(): Generator<CallEffect<unknown> | PutEffect<any>, void, unknown> {
  let response: any = null;
  let responseBody: any = null;

  try {
    // RgLMHWQ3NsjYufoQ49baXO4DA5w_6QRCxpCezx6V
    // GET https://api.companieshouse.gov.uk/search
    // GET https://api.companieshouse.gov.uk/search/companies
    // GET https://api.companieshouse.gov.uk/search/officers
    // GET https://api.companieshouse.gov.uk/search/disqualified-officers
    // response = yield call(fetch, 'https://api.companieshouse.gov.uk/search&&q=test');
    response = yield call(fetch, 'https://api.companieshouse.gov.uk/search&&q=test', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'RgLMHWQ3NsjYufoQ49baXO4DA5w_6QRCxpCezx6V'
      }
    });
    responseBody = response.json();
  } catch (e) {
    // TODO - set default error handler
    // yield put(fetchFailed(e));
    console.error('companies_fetch_failed');
    return;
  }

  yield put(companiesFetchSuccess(responseBody.records));
}

export default function* rootSaga(): Generator<AllEffect<Generator<any, void, unknown>>, void, unknown> {
  yield all([
    onCompaiesSearch()
  ]);
}

// https://hackernoon.com/moving-api-requests-to-redux-saga-21780f49cbc8 - BASIC
// https://medium.com/@lavitr01051977/make-your-first-call-to-api-using-redux-saga-15aa995df5b6
