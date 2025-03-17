import ProductOne from "./ProductOne"

function Product(){
    return(
        <>
       
        <div className="Product-box">
        <h2 className="Product">Product</h2>
        <div className="pro">
            <ProductOne/>
            <ProductOne/>
            </div>
            <div className="pro">
            <ProductOne/>
            <ProductOne/>
            </div>
            </div></>
    )
}

export default Product