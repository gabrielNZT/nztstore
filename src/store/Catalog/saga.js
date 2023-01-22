import {call, put, all, takeLatest} from "redux-saga/effects";
import { serviceCatalog } from "../../service/serviceCatalog";
import { GET_CATALOG_PRODUCTS } from "../actionTypes";
import { getProductsFailed, getProductsSuccess } from "./actions";

function* getProducts(){
    try {
        const { data } = yield call(serviceCatalog.getProducts);
        yield put(getProductsSuccess(data));
    } catch (e) {
        yield put(getProductsFailed());
        console.log(e);
    }
}

export default all([
   takeLatest (GET_CATALOG_PRODUCTS, getProducts)
]);