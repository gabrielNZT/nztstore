
import { descendingPrice, growingPrice, mostAvaliation } from "../../utils/ordenation"
import { CLOSE_MODAL, GET_CATALOG_PRODUCTS, GET_CATALOG_PRODUCTS_FAILED, GET_CATALOG_PRODUCTS_SUCCESS, OPEN_MODAL, SET_CATEGORY, SET_FILTER } from "../actionTypes"

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
            const { category } = action;
            return {
                ...state,
                categorySelected: category,
                filteredProducts: category !== "Todos" ? state.products.filter(product => product.category === category) : state.products,
                filter: "none"
            }

        case SET_FILTER:
            const productsPerCategory = state.categorySelected === "Todos" ? state.products : state.products.filter(product => product.category === state.categorySelected);
            const productsWithFilter = action.filter ? handleFilters(action.filter, productsPerCategory) : productsPerCategory;
            return {
                ...state,
                filteredProducts: productsWithFilter,
                filter: action.filter
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

function handleFilters(filter, filteredProducts) {
    switch (filter) {
        case "mostAvaliation":
            return filteredProducts.sort(mostAvaliation)
        case "growingPrice":
            return filteredProducts.sort(growingPrice)
        case "descendingPrice":
            return filteredProducts.sort(descendingPrice)
        default:
            return filteredProducts
    }
}