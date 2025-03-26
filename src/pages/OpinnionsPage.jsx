

function OpinnionsPage({name,lastName,comment}){

    console.log({name,lastName,comment});
    
    return(
        <>
        <h1>Commet pages  abaut the site</h1>
         <div>
          <p>{name}  {lastName}</p>
          <p>{comment}</p>
         </div>
        </>
    )
}



export default OpinnionsPage