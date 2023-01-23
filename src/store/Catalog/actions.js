import { CLOSE_MODAL, GET_CATALOG_PRODUCTS, GET_CATALOG_PRODUCTS_FAILED, GET_CATALOG_PRODUCTS_SUCCESS, OPEN_MODAL, SET_CATEGORY, SET_FILTER } from "../actionTypes";

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

export function selectCategory(category) {
    return {
        type: SET_CATEGORY,
        category
    }
}

export function setFilter(filter) {
    return {
        type: SET_FILTER,
        filter
    }
}

export function closeModal() {
    return {
        type: CLOSE_MODAL
    }
}

export function openModal(product) {
    return {
        type: OPEN_MODAL,
        product
    }
}