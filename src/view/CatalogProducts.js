/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContentCards, HeaderStore, ModalDetails } from "../components";
import { getProducts, setOrdenation } from "../store/Catalog/actions";
import { descendingPrice, growingPrice, mostAvaliation } from "../utils/ordenation";
import { isEmptyArray } from "../utils/validations";

function CatalogProduct() {
    const filteredProducts = useSelector(state => state.filteredProducts);
    const filter = useSelector(state => state.filter);
    const categorySelected = useSelector(state => state.categorySelected);
    const products = useSelector(state => state.products);


    const dispatch = useDispatch();

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

    useEffect(() => {
        const productsPerCategory = categorySelected === "Todos" ? products : products.filter(product => product.category === categorySelected);
        const productsWithFilter = filter !== "none" ? handleFilters(filter, productsPerCategory) : productsPerCategory;
        dispatch(setOrdenation(productsWithFilter));
    }, [filter, categorySelected]);

    useEffect(() => {
        if (isEmptyArray(products)) {
            dispatch(getProducts());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <HeaderStore categorySelected={categorySelected} />
            <ContentCards filteredProducts={filteredProducts} filter={filter} />
            <ModalDetails />
        </>
    );
}
export default CatalogProduct;