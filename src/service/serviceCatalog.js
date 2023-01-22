import { api } from "./api"

export const serviceCatalog = {

    getProducts: () => {
        return api.get("/products")
    }
}