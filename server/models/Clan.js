import mongoose, { Mongoose, SchemaTypes } from "mongoose";

const { Schema } = mongoose;
const clanSchema = new Schema({
   clan_logo:String,
 clan_name:String,
 leader:String,
 co_leaders:[{
    co_leader_id:String,
    co_leader_name:String,
 }],
 players:[{
    player_id:[{
      type:Schema.Types.ObjectId,
      ref:'user'
    }], 
    player_name:String,    
 }]

  
}
);
const clan = mongoose.model('Clan', clanSchema);
export default clan;