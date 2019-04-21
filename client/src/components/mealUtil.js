const underweight = {
  Veg: {
    protein: ["pro1"],
    carbs: ["carbs1"],
    fats: ["fats1"],
    fibres: ["fibre1"]
  },
  "Non-Veg": {
    protein: ["pro2"],
    carbs: ["carbs2"],
    fats: ["fats2"],
    fibres: ["fibre2"]
  },
  Vegan: {
    protein: ["pro3"],
    carbs: ["carbs3"],
    fats: ["fats3"],
    fibres: ["fibre3"]
  }
};
const mealUtil = (obj, newMeal) => {
  var category = obj.idealPlate.category;
  if (category === "Under Weight") {
    // random generate integer value
    var i = 0;
    newMeal.protein = underweight[obj.foodType].protein[i];
    newMeal.carbs = underweight[obj.foodType].carbs[i];
    newMeal.fats = underweight[obj.foodType].fats[i];
    newMeal.fibres = underweight[obj.foodType].fibres[i];
  }
};
export default mealUtil;
