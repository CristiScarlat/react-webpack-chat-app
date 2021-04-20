const usersList = {}

const setUser = (userObj) => {
    console.log(userObj)
    usersList[userObj.name] = {id: userObj.id, timestamp: new Date()}
}

const getUsers = () => {
    return usersList
}

const getUserName = (id) => {
    if(!id)return
    const users = Object.keys(usersList)
    const userById = users.find(name => usersList[name].id === id)
    return userById
}

const deleteUser = (id) => {
    if(!id)return
    const users = Object.keys(usersList)
    const disconnectedUser = users.filter(name => usersList[name].id === id)
    delete usersList[disconnectedUser]
}

module.exports = {setUser, getUsers, deleteUser, getUserName}