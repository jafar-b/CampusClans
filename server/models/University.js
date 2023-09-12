import mongoose, { Mongoose } from "mongoose";
const { Schema } = mongoose;

const universitySchema = new Schema({
university_id:String,
name:String,
leader:String,
logo:Image,
  
}
);
const university = mongoose.model('university', universitySchema);
export default university;