import { call, put } from '@redux-saga/core/effects';
import { loadMattressesSuccess } from '../../ducks/mattresses';
import { requestGetMattresses } from '../requests/mattress';

export function* handleGetMattresses() {
  try {
    const mattresses = yield call(requestGetMattresses);
    yield put(loadMattressesSuccess(mattresses));
  } catch (error) {
    console.log(error);
  }
}
