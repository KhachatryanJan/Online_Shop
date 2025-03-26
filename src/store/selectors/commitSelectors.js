const getCommit=state=>state.commit.all ?? []
const getDrow=state=>state.commit?.drawable ?? {}
console.log(getCommit(someState))


export{getCommit,getDrow}