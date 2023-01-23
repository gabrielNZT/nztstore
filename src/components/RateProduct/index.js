import { Rate } from "antd";

function RateProduct({ rate, count }) {
    return (
        <div>
            <Rate disabled defaultValue={rate} />
            <span style={{ marginLeft: "10px" }}>{`(${count})`}</span>
        </div>
    )
}
export default RateProduct;