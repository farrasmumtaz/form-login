import { takeEvery, put } from "redux-saga/effects";

function* incrementSaga() {
  console.log("Saga jalan");
  yield put({ type: "INCREMENT" });
}

export function* rootCounterSaga() {
  yield takeEvery("INCREMENT_ASYNC", incrementSaga);
}