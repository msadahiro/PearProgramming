var mongoose = require('mongoose')
var Schema = mongoose.Schema
var StackSchema = new Schema ({
  name:{type:String, required:true},
  _project:[{type:Schema.Types.ObjectId, ref:"Project"}]
  
},{timestamps:true})
mongoose.model("Stack",StackSchema)
