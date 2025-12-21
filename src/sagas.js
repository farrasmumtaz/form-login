import { all } from "redux-saga/effects";
import { rootCounterSaga } from "./Page/BelajarRedux/saga";
import rootLoginSaga from "./UI/LoginPage";

export default function* rootSaga() {
  yield all([
    rootCounterSaga(),
    rootLoginSaga(),
  ]);
}