import { STORE_NAME_LABEL } from "../messages";

function HeaderStore() {
    return (
        <div style={{display: "flex", justifyContent: "center", backgroundColor: "black"}}>
            <h1 style={{color: "white"}}> {STORE_NAME_LABEL} </h1>
        </div>
    )
}
export default HeaderStore;