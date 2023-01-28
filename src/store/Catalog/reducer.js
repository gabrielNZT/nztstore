
import { CLOSE_MODAL, GET_CATALOG_PRODUCTS, GET_CATALOG_PRODUCTS_FAILED, GET_CATALOG_PRODUCTS_SUCCESS, OPEN_MODAL, SET_CATEGORY, SET_FILTER, SET_ORDENATION } from "../actionTypes"

const INITIAL_STATE = {
    products: [],
    filteredProducts: [],
    categorySelected: "Todos",
    loadingFetchProducts: false,
    visibleModal: false,
    filter: "none",
    productSelected: {}
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
                filteredProducts: action.data,
                loadingFetchProducts: false
            }

        case GET_CATALOG_PRODUCTS_FAILED:
            return {
                ...state,
                loadingFetchProducts: false
            }

        case SET_CATEGORY:
            return {
                ...state,
                categorySelected: action.category,
                filter: "none"
            }

        case SET_FILTER:
            return {
                ...state,
                filter: action.filter
            }

        case SET_ORDENATION:
            return {
                ...state,
                filteredProducts: action.products
            }

        case CLOSE_MODAL:
            return {
                ...state,
                productSelected: {},
                visibleModal: false
            }

        case OPEN_MODAL:
            return {
                ...state,
                productSelected: action.product,
                visibleModal: true
            }

        default:
            return state
    }
}
