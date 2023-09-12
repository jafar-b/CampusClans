import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import User from './models/User.js'
import clan from './models/Clan.js'
import { corsOptions } from './utils/corsOptions.js'
import errorHandler from './middlewares/errorHandler.js'
import notFound from './middlewares/notFound.js'
import morgan from 'morgan'

import './utils/connectDB.js'
import { LogError } from 'concurrently'
import assignment from './models/Assignment.js'

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(corsOptions))

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.post("/login", async (req, res) => {
  try {
    const { name, xp, coins, role, clan } = req.body;

    // Check if a user with the same name already exists
    const existingUser = await User.findOne({ name: name });

    if (existingUser) {
      return res.status(400).json({ error: "User exists." });
    }

    // If no user with the same name exists, create and save the new user
    const newUser = new User({
      name: name,
      xp: xp,
      role: role,
      coins: coins,
      clan: clan
    });

    await newUser.save();

    res.status(200).json({ message: "Data saved successfully" });
    console.log("Registration successful. Please login.");
  } catch (error) {
    res.status(500).json({ error: "Data not saved", message: error.message });
  }
});

app.post('/api/clan', async (req, res) => {
  try {
    const { name,
      logo,
      leader } = req.body;
    const newClan = new clan({
      clan_name: name,
      clan_logo: logo,
      leader: leader,
    })
    const existingClan = await clan.findOne({ clan_name: name });
    console.log(existingClan);
    if (existingClan) {
      return res.status(400).json({ error: "Clan exists." });
    }
    await newClan.save();
    return res.status(200).json({ message: "clan saved successfully" });

  } catch (err) { res.status(500).send({ message: err }) };
})



app.post("/assignment/work", async (req, res) => {
  const {assignment_id, title, player_id, submitted_at } = req.body;
  const newAssignment = new assignment({
    assignment_id:assignment_id,
    title: title,
    player_id: player_id,
    submitted_at: submitted_at,
  })
const existingAssignment=await assignment.findOne({assignment_id:assignment_id})
console.log(existingAssignment);
if(existingAssignment){
return res.status(400).json({message:"assignment exists"});
}
await newAssignment.save();
return res.status(200).json({ message: "assignment saved successfully" });

})


app.post("/assignment/marks",async (req,res)=>{
  const {player_id,marks}=req.body;


})



app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
