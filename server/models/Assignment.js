import mongoose from "mongoose";
const { Schema } = mongoose;

const assignmentSchema = new Schema({
    assignment_id:Schema.ObjectId,
title:String,
created_by:String,
xp:Number,
coins:Number,
player_work:[{
    player_id:String,
    pdf_file:String,
    assigned_work:[{
        work_id:String,
        name:String,
    }],
    submitted_work:[
    ],
    submitted_at:String,
    }],

}

);
const assignment = mongoose.model('assignment', assignmentSchema);
export default assignment;