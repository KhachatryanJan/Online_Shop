import { useSelector } from "react-redux";

import MakeupProductBoxOne from "./MakeupProductBoxOne"
import { productSelectors } from "../../store/selectors";

function FinishedProduct() {

    const product = useSelector(productSelectors.getProduct)
    console.log(product);
    const productList = product?.all || [];

    return productList.filter(p => p.status === false).map((pro) => (
        <MakeupProductBoxOne key={pro.id} {...pro} />
    ))


}

export default FinishedProduct