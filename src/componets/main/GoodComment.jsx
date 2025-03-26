

import OpinnionsPage from "../../pages/OpinnionsPage"

import { useSelector } from "react-redux";
import { commitSelectors } from "../../store/selectors";

function GoodCommit(){
    const commit= useSelector(commitSelectors.getCommit) || [];
    console.log("Commit data from Redux:", commit);
    
    if (!commit || commit.length === 0) {
        return <p> Տվյալներ չկան</p>;
    }

    return commit.filter(c=>c.status === true).map((comm)=>(
        <OpinnionsPage id={comm.id} name={comm.name} lastName={comm.lastName} comment={comm.comment} />
    ))
}


export default GoodCommit