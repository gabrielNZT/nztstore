import { Card } from 'antd';
import { useDispatch } from 'react-redux';
import { openModal } from '../../store/Catalog/actions';
import { replaceDotWithComma } from '../../utils/dataFormater';
import RateProduct from '../RateProduct';
const { Meta } = Card;

function ProductCard({ alt, product }) {
    const { title, price, image: src, rating } = product;
    const { rate, count } = rating;

    const dispatch = useDispatch();
    
    return (
        <Card
            onClick={() => dispatch(openModal(product))}
            hoverable
            style={{
                width: 240,
                height: "370px"
            }}
            className={"product-card"}
            cover={<img style={{ height: "230px", width: "200px" }} alt={alt} src={src} />}
        >
            <Meta title={title} description={`R$ ${replaceDotWithComma(price.toString())}`} />
            <RateProduct rate={rate} count={count} />
        </Card>
    )
}
export default ProductCard; 