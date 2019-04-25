module.exports = function plate(data, profileFields) {
  const BMI = Math.ceil(data.weight / (data.height * data.height)); //kg/m*m
  profileFields.idealPlate = {};
  if (0 < BMI && BMI <= 19) {
    profileFields.idealPlate.category = "Under Weight";
    profileFields.idealPlate.carbs = 50;
    profileFields.idealPlate.pro = 30;
    profileFields.idealPlate.fat = 10;
    profileFields.idealPlate.fibre = 10;
  } else if (20 <= BMI && BMI <= 24) {
    profileFields.idealPlate.category = "FIT & FINE";
    profileFields.idealPlate.carbs = 30;
    profileFields.idealPlate.pro = 30;
    profileFields.idealPlate.fat = 30;
    profileFields.idealPlate.fibre = 10;
  } else if (25 <= BMI && BMI <= 30) {
    profileFields.idealPlate.category = "Over Weight";
    profileFields.idealPlate.carbs = 20;
    profileFields.idealPlate.pro = 40;
    profileFields.idealPlate.fat = 15;
    profileFields.idealPlate.fibre = 25;
  } else if (31 <= BMI && BMI <= 39) {
    profileFields.idealPlate.category = "Obese";
    profileFields.idealPlate.carbs = 15;
    profileFields.idealPlate.pro = 50;
    profileFields.idealPlate.fat = 10;
    profileFields.idealPlate.fibre = 25;
  } else if (BMI > 39) {
    profileFields.idealPlate.category = "Extremely Obese";
    profileFields.idealPlate.carbs = 10;
    profileFields.idealPlate.pro = 60;
    profileFields.idealPlate.fat = 5;
    profileFields.idealPlate.fibre = 25;
  }

  return {
    profileFields
  };
};
