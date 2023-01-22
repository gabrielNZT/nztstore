import { GET_CATALOG_PRODUCTS, GET_CATALOG_PRODUCTS_FAILED, GET_CATALOG_PRODUCTS_SUCCESS } from "../actionTypes"

const INITIAL_STATE = {
    products: {},
    loadingFetchProducts: false
}

export function catalog(state = INITIAL_STATE, action) {
    switch (action.type) {

        case GET_CATALOG_PRODUCTS:
            return {
                ...state,
                loadingFetchProducts: true
            }

        case GET_CATALOG_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.data,
                loadingFetchProducts: false
            }

        case GET_CATALOG_PRODUCTS_FAILED:
            return {
                ...state,
                loadingFetchProducts: false
            }

        default:
            return state
    }
}