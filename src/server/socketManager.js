function isUser(userList, user) {
  return user in userList;
}

function removeUser(userList, user) {
  let newList = { ...userList };
  delete newList[user];
  return newList;
}

function addUser(userList, user) {
  let newList = Object.assign({}, userList);
  newList[user.name] = user;
  return newList;
}

module.exports = {
  addUser,
  removeUser,
  isUser
};
