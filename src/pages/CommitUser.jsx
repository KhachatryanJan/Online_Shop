

function CommitUser(comm){
    return(
    
         <div className="comment-box">
                <p className="comment-name">{comm.name}  {comm.lastName} </p>
                <p className="comment-text">{comm.comment}</p>
            </div>
    )
}

export default CommitUser