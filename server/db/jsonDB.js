const usersList = {}

const setUser = (userObj) => {
    console.log(userObj)
    usersList[userObj.name] = {id: userObj.id, timestamp: new Date()}
}

const getUsers = () => {
    return usersList
}

module.exports = {setUser, getUsers}