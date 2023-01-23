import { useSelector } from "react-redux";
import { ProductCard } from "../index";
import { replaceDotWithComma } from "../../utils/dataFormater";

function ContentCards() {
    const filteredProducts = useSelector(state => state.filteredProducts);

    return (
        <>
            <div style={{ width: "100%", height: "70vh", display: "flex", justifyContent: "center", marginTop: "40px" }}>
                <div style={{ width: "75%", height: "50vh", display: "flex", gap: "45px", flexWrap: "wrap" }}>
                    {filteredProducts.map((product, index) => <ProductCard
                        key={index} alt={`productPhoto-${index}`}
                        title={product.title}
                        description={replaceDotWithComma(product.price.toString())}
                        src={product.image}
                        rate={product.rating.rate}
                        count={product.rating.count}
                    />)}
                </div>
            </div>
        </>
    )
}
export default ContentCards; 