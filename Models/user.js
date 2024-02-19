import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 2,
    max: 100,
  },
  email:{
    type:String,
    required:true,
    unique:true,
    max:50,
  },
  password:{
    type:String,
    required:true,
    unique:true,
    min:6,
  },
  occupation:String,
  state:String,
  country:String,
  phoneNo:String,
  transaction:Array,
  role:{
    type:String,
    enum:["user","admin","superadmin"],
    default:"admin",
  },
},
{timestamps:true});

const User=mongoose.model("User",UserSchema)

export default User;
