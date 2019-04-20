const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validatePostInput(data) {
  let errors = {};
  if (Validator.isEmpty(data.post)) {
    errors.post = "Post is required and should not be empty";
  }

  return { errors, isValid: isEmpty(errors) };
};
