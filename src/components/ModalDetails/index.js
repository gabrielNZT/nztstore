import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../store/Catalog/actions";

function ModalDetails() {
    const visibleModal = useSelector(state => state.visibleModal);
    const productSelected = useSelector(state => state.productSelected);

    const dispatch = useDispatch();
    console.log(productSelected)
    return (
        <Modal
            title={productSelected.title}
            centered
            open={visibleModal}
            onOk={() => dispatch(closeModal())}
            onCancel={() => dispatch(closeModal())}
        >
            <div style={{ display: "flex", marginTop: "30px", gap: "20px" }} >
                <div>
                    <img alt={`product ${productSelected.key}`} src={productSelected.image} style={{ height: "200px" }} />
                </div>
                <div>
                    <p> {productSelected.description} </p>
                </div>
            </div>

        </Modal>
    )
}
export default ModalDetails;