const express=require('express');
const workoutRoutes=require('./routes/workout');
const mongoose=require("mongoose");
const cors=require('cors');
const userRoutes=require('./routes/user')

const app=express();
app.use(cors());

const dotenv=require('dotenv');

// Loading environment variables from .env file
dotenv.config(); 

//middleware
app.use(express.json()) //
app.use((req,res,next)=>{
  console.log(req.path, req.method);
  next(); 
});

//Routes
app.use('/api/workouts',workoutRoutes)
app.use('/api/user',userRoutes)


//connect to DB
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 
})
.catch((error)=>{console.log(error)})

// const PORT=4000;
const PORT=process.env.PORT || 4000;

