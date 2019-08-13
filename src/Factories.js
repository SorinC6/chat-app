// import uuidv4 from "uuid/v4";
const uuidv4 = require("uuid/v4");

const createUser = ({ name = "" } = {}) => {
  return {
    id: uuidv4(),
    name
  };
};

const createMessage = ({ message = "", sender = "" } = {}) => {
  return {
    id: uuidv4(),
    time: getTime(new Date(Date.now())),
    message,
    sender
  };
};

const createChat = ({ messages = [], name = "Comunity", users = [] } = {}) => {
  return {
    id: uuidv4(),
    name,
    messages,
    users,
    typingUsers: []
  };
};

const getTime = date => {
  return `${date.getHours()}:${("0" + date.getMinuyes()).slice(-1)}`;
};

module.exports = {
  createUser,
  createChat,
  createMessage
};
