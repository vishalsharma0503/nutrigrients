const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  username: {
    type: String,
    required: false,
    max: 30
  },
  age: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  allergies: {
    type: String,
    required: false
  },
  conditions: {
    type: String,
    required: false
  },
  foodType: {
    type: String,
    required: true
  },
  bodyShape: {
    type: String,
    required: false
  },
  idealPlate:{
    type: Object,
    required:false
  },
  bio:{
    type:String,
    required:false
  },
  facebook:{
    type:String,
    required:false
  },
  instagram:{
    type:String,
    required:false
  },
  twitter:{
    type:String,
    required:false
  },
  followers:[],
  date:{
    type:Date,
    default:Date.now
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
