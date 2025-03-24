

function MakeupProductBoxOne(pro){

    
    return(
        <>
        <div className="box1">
        <div className="MakeupProductBoxOne-box">
            <img src={pro.img} alt="concealer"  className="concealer"/>
            <h1 className="name">{pro.name}</h1>
            <div className="MakeupProductBoxOne-box-info">
                <p className="MakeupProductBoxOne-box-info-p">Concealers are used in makeup to cover skin imperfections,<br/> such as blemishes, acne scars, or dark circles under the eyes,<br/> to give the skin an even and clean appearance.</p>
                <p>{pro.price}  /  {pro.quantity}</p>
                <button>Available</button>
            </div>
        </div>
        
        </div>
        </>
    )
}

export default  MakeupProductBoxOne