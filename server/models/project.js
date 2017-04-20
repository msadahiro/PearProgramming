var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ProjectSchema = new Schema ({
  name:{type:String, required:true},
  _stack:[{type:Schema.Types.ObjectId, ref:"Stack"}],
  _creator:[{type:Schema.Types.ObjectId, ref:"User"}],
  _teamMembers:[{type:Schema.Types.ObjectId, ref:"User"}],
  image:String,
  description:String,
  teamMax: Number
},{timestamps:true})
mongoose.model("Project",ProjectSchema)
