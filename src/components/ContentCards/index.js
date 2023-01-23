import { Spin } from "antd";
import { useSelector } from "react-redux";
import { ProductCard, SelectFilter } from "../index";

function ContentCards({ filteredProducts, filter }) {
    const loadingFetchProducts = useSelector(state => state.loadingFetchProducts);

    return (
        <>
            <Spin className="spin-objects" spinning={loadingFetchProducts} size={"large"} />
            <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                <div style={{ width: "75%" }}>
                    <SelectFilter filter={filter} />
                </div>
            </div>
            <div  className="contet-group-cards" >
                <div className="content-cards">
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