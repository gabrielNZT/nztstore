import { all} from "redux-saga/effects";
import catalog from "./Catalog/saga"

export default function* rootSaga() {
    yield all([
        catalog
    ]);
}