
import CommitUser from "../../pages/CommitUser";

import { useSelector } from "react-redux";
import { commitSelectors } from "../../store/selectors";
function BadCommit(){
    const commit= useSelector(commitSelectors.getCommit);

    return commit.filter(c=>c.status === false).map((comm)=>(
         <CommitUser id={comm.id} {...comm}/>
    ))
}


export default BadCommit