

import CommitUser from "../../pages/CommitUser";
import { useSelector } from "react-redux";
import { commitSelectors } from "../../store/selectors";

function GoodCommit() {
    const commit = useSelector(commitSelectors.getCommit);
    console.log("Commit data from Redux:", commit);

    if (!commit || commit.length === 0) {
        return <p> Տվյալներ չկան</p>;
    }
  
    return  commit.filter(c=>c.status === true).map((comm)=>(
            <CommitUser id={comm.id} {...comm}/>  
   ))

}
export default GoodCommit 