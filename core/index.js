const sum = require("./sum");
const less = require("./less");

const createOperation = (num1, num2, callback) => {
  return callback(num1, num2);
};

module.exports = {
  createOperation,
  sum,
  less,
};
