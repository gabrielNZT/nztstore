import { GET_CATALOG_PRODUCTS, GET_CATALOG_PRODUCTS_FAILED, GET_CATALOG_PRODUCTS_SUCCESS } from "../actionTypes";

export function getProducts() {
    return {
        type: GET_CATALOG_PRODUCTS
    }
}

export function getProductsSuccess(data) {
    return {
        type: GET_CATALOG_PRODUCTS_SUCCESS,
        data
    }
}

export function getProductsFailed() {
    return {
        type: GET_CATALOG_PRODUCTS_FAILED
    }
}