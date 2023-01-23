import { Button, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../store/Catalog/actions";
import { BUTTON_CLOSE_LABEL } from "../messages";

function ModalDetails() {
    const visibleModal = useSelector(state => state.visibleModal);
    const productSelected = useSelector(state => state.productSelected);

    const dispatch = useDispatch();
    const onClose = () => dispatch(closeModal());

    return (
        <Modal
            title={productSelected.title}
            centered
            open={visibleModal}
            onCancel={onClose}
            footer={[
                <Button type="default" onClick={onClose}>
                    {BUTTON_CLOSE_LABEL}
                </Button>
            ]}

        >
            <div style={{ display: "flex", marginTop: "30px", gap: "20px" }} >
                <div>
                    <img alt={`product ${productSelected.key}`} src={productSelected.image} style={{ height: "200px", width: "120px" }} />
                </div>
                <div>
                    <p> {productSelected.description} </p>
                </div>
            </div>

        </Modal>
    )
}
export default ModalDetails;