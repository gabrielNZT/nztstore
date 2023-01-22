import { Card } from 'antd';
const { Meta } = Card;

function ProductCard({ src, title, description, alt }) {
    return (
        <Card
            hoverable
            style={{
                width: 240,
            }}
            cover={<img alt={alt} src={src} />}
        >
            <Meta title={title} description={description} />
        </Card>
    )
}
export default ProductCard;