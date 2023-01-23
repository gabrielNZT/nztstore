
import { GET_CATALOG_PRODUCTS, GET_CATALOG_PRODUCTS_FAILED, GET_CATALOG_PRODUCTS_SUCCESS, SET_CATEGORY } from "../actionTypes"

const INITIAL_STATE = {
    products: [],
    filteredProducts: [],
    categorySelected: "Todos",
    loadingFetchProducts: false,
    filter: ""
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
            const { category } = action;
            return {
                ...state,
                categorySelected: category,
                filteredProducts: category ? state.products.filter(product => product.category === category) : state.products
            }

        default:
            return state
    }
}