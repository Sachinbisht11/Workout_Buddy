const express=require('express');

const app=express();

const dotenv=require('dotenv');

// Loading environment variables from .env file
dotenv.config(); 

//middleware
app.use((req,res,next)=>{
  console.log(req.path, req.method);
  next();
});

//Routes
app.get('/', (req,res)=>{
  res.send('Hello World');
});

// const PORT=3000;
const PORT=process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 