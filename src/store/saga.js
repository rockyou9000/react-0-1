import { put, takeEvery, delay } from 'redux-saga/effects'

export function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'plus' })
}

export default function* rootSaga() {
  yield takeEvery('PLUS_ASYNC', incrementAsync)
}
