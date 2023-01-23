import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContentCards, HeaderStore } from "../components";
import ModalDetails from "../components/ModalDetails";
import { getProducts } from "../store/Catalog/actions";

function CatalogProduct() {
    const filteredProducts = useSelector(state => state.filteredProducts);
    const filter = useSelector(state => state.filter);
    const categorySelected = useSelector(state => state.categorySelected);


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
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