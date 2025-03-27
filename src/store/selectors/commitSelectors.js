const getCommit=state=>state.commit.all ?? []
const getDrow=state=>state.commit?.drawable ?? {}



export{getCommit,getDrow}