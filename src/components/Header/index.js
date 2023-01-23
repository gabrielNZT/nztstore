import { useDispatch, useSelector } from "react-redux"
import logo from "../../assets/Screenshot_2.png"
import { selectCategory } from "../../store/Catalog/actions";
import { CATEGORY_MEN_LABEL, CATEGORY_WOMEN_LABEL, CATEGORY_JEWELRY_LABEL, CATEGORY_ELETRONICS_LABEL, CATEGORY_ALL_LABEL } from "../messages"

const ITEMS_CATEGORY = [
    { label: CATEGORY_MEN_LABEL, type: "men's clothing" },
    { label: CATEGORY_WOMEN_LABEL, type: "women's clothing" },
    { label: CATEGORY_JEWELRY_LABEL, type: "jewelery" },
    { label: CATEGORY_ELETRONICS_LABEL, type: "electronics" },
    { label: CATEGORY_ALL_LABEL}]

function HeaderStore() {
    const categorySelected = useSelector(state => state.categorySelected);

    const dispatch = useDispatch();
    const handleClickCategory = (category) => dispatch(selectCategory(category))

    return (
        <>
            <div style={{ background: "black", width: "100%", display: "flex", justifyContent: "center", height: "30px" }}>
                <span style={{ color: "white", fontSize: "13px" }}> Moda e Tecnologia em um só lugar </span>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img style={{ height: "200px" }} alt="logo" src={logo} />
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: "60px" }}>
                {ITEMS_CATEGORY.map((item, index) => (
                    <span onClick={() => handleClickCategory(item.type)} key={index} className={"items-category"}>{item.type === categorySelected ? <b>{item.label}</b> : item.label}</span>
                ))}
            </div>
        </>
    )
}
export default HeaderStore;