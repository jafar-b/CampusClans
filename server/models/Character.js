//id,image
import mongoose, { Mongoose } from "mongoose";
const { Schema } = mongoose;

const characterSchema = new Schema({
  character_id:String,
  char_img:Image,
  
}
);
const character = mongoose.model('character', characterSchema);
export default character;