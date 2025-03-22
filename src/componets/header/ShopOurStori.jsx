import { Link } from "react-router-dom"


function ShopOurStori(){
    return(
        <div className="ShopOurStori">
        <Link to="/shopp"> <div className="shop">Shop</div></Link>
        <div className="our_stori">Our stori</div>
        </div>
    )
}

export default ShopOurStori