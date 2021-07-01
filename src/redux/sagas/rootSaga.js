import { takeLatest } from '@redux-saga/core/effects';
import { LOAD_MATTRESSES } from '../ducks/mattresses';
import { handleGetMattresses } from './handlers/mattress';

export function* watcherSaga() {
  yield takeLatest(LOAD_MATTRESSES, handleGetMattresses);
}
