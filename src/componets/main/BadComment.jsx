
import OpinnionsPage from "../../pages/OpinnionsPage"

import { useSelector } from "react-redux";
import { commitSelectors } from "../../store/selectors";
function BadCommit(){
    const commit= useSelector(commitSelectors.getCommit);

    return commit.filter(c=>c.status === false).map((comm)=>(
         <OpinnionsPage id={comm.id} {...comm}/>
    ))
}


export default BadCommit