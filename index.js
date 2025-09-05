require('dotenv').config();
const express = require("express")
const axios = require('axios');
const app= express();
const PORT = 3000;
const apiKey = process.env.API_KEY;

// static file from public folder
app.use(express.static("public"));


// now using api to fetch weather 
app.get("/weather",async(req,res)=>{
   const city= req.query.city;
   const apikey =process.env.API_KEY;
   if(!city){
    return res.status(400).json({error:"city is required"});

   } 
   try{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await axios.get(url);
    res.json(response.data);
   }
   catch (error){
    res.status(500).json({error:"city not found or api error"});

   }

});
app.listen (PORT,()=>{
    console.log(`✅ Server running at http://localhost:${PORT}`);
});


