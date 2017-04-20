var mongoose = require('mongoose')
var Schema = mongoose.Schema
var UserSchema = new Schema ({
  name:{type:String, required:true},
  _stack:[{type:Schema.Types.ObjectId, ref:"Stack"}]
  
},{timestamps:true})
mongoose.model("User",UserSchema)
