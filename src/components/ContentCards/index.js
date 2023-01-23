import { ProductCard, SelectFilter } from "../index";

function ContentCards({ filteredProducts, filter }) {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                <div style={{ width: "75%" }}>
                    <SelectFilter filter={filter} />
                </div>
            </div>
            <div style={{ width: "100%", height: "70vh", display: "flex", justifyContent: "center", marginTop: "40px" }}>
                <div style={{ width: "75%", height: "50vh", display: "flex", gap: "45px", flexWrap: "wrap" }}>
                    {filteredProducts.map((product, index) => <ProductCard
                        product={product}
                        key={index}
                        alt={`productPhoto-${index}`}
                    />)}
                </div>
            </div>
        </>
    )
}
export default ContentCards; 