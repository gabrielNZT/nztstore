import { Card } from 'antd';
import RateProduct from '../RateProduct';
const { Meta } = Card;

function ProductCard({ src, title, description, alt, rate, count }) {
    return (
        <Card
            hoverable
            style={{
                width: 240,
                height: "370px"
            }}
            className={"product-card"}
            cover={<img style={{ height: "230px", width: "200px" }} alt={alt} src={src} />}
        >
            <Meta title={title} description={`R$ ${description}`} />
            <RateProduct rate={rate} count={count} />
        </Card>
    )
}
export default ProductCard; 