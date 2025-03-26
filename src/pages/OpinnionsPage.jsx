

function OpinnionsPage({name,lastName,comment}){

    console.log({name,lastName,comment});
    
    return(
        <>
         <div>
          <p>{name}  {lastName}</p>
          <p>{comment}</p>
         </div>
        </>
    )
}



export default OpinnionsPage