const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.age = !isEmpty(data.age) ? Number(data.age) : 0;
  data.username = !isEmpty(data.username) ? data.username : "";
  data.height = !isEmpty(data.height) ? Number(data.height) : 0;
  data.weight = !isEmpty(data.weight) ? Number(data.weight) : 0;
  data.gender = !isEmpty(data.gender) ? data.gender : "";
  data.allergies = !isEmpty(data.allergies) ? data.allergies : "";
  data.conditions = !isEmpty(data.conditions) ? data.conditions : "";
  data.foodType = !isEmpty(data.foodType) ? data.foodType : "";
  data.bodyShape = !isEmpty(data.bodyShape) ? data.bodyShape : "";
  
  if (typeof data.age !== "number" || data.age <= 0) {
    errors.age = "Profile - Invalid Age value";
  }
  if (!Validator.isLength(data.username, { min: 2, max: 30 })) {
    errors.username = "Profile - username needs to between 2 and 4 characters";
  }
  if (Validator.isEmpty(data.username)) {
    errors.username = "Profile - username is required";
  }
  if (typeof data.height !== "number" || data.height <= 0) {
    errors.height = "Profile - Invalid height value";
  }
  if (typeof data.weight !== "number" || data.weight <= 0) {
    errors.weight = "Profile - Invalid weight value";
  }
  if (Validator.isEmpty(data.gender)) {
    errors.gender = "Profile - Gender is required";
  }
  if (
    data.gender !== "M" &&
    data.gender !== "m" &&
    data.gender !== "F" &&
    data.gender !== "f"
  ) {
    errors.gender = "Profile - Invalid gender value";
  }
  // if (Validator.isEmpty(data.foodType)) {
  //   errors.foodType = "Profile - Food Type is required";
  // }
  

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
