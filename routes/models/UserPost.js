const mongoose = require("mongoose");
const Schema = mongoose.Schema

const UserPost = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      },
    post:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
      }
})

module.exports = mongoose.model("userpost", UserPost);