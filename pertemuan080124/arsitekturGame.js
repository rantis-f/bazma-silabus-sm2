const getAchievement = (name, type, description) => {
    return {name, type, description}
}

const getGameAchievement = (id) => {
    const kelas = id === 1 ? getAchievement('Overpower','Normal','Disarm your enemy 200 times in any mode except Survival') 
    : id === 2 ? getAchievement('Gravewalker','Eclipse','Finish 20 rounds with a critical health level during Eclipse')
    : 'Not Found'
    return {id, kelas}
}

console.log(getGameAchievement(1))
console.log(getGameAchievement(2))
console.log(getGameAchievement(3))
