const getProduct=state => state.product
const getPro=state=>state.product?.drawable ?? {}
export{getProduct,getPro}