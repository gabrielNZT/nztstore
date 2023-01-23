import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContentCards, HeaderStore, ModalDetails } from "../components";
import { getProducts } from "../store/Catalog/actions";
import { isEmptyArray } from "../utils/validations";

function CatalogProduct() {
    const filteredProducts = useSelector(state => state.filteredProducts);
    const filter = useSelector(state => state.filter);
    const categorySelected = useSelector(state => state.categorySelected);
    const products = useSelector(state => state.products);


    const dispatch = useDispatch();

    useEffect(() => {
        if (isEmptyArray(products)) {
            dispatch(getProducts());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <HeaderStore categorySelected={categorySelected} />
            <ContentCards filteredProducts={filteredProducts} filter={filter} />
            <ModalDetails />
        </>
    );
}
export default CatalogProduct;