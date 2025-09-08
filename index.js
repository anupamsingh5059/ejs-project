import express from 'express'
const app = express()



app.set("view engine", 'ejs')
app.get('/', (req, res)=>{

    res.send("Home Page")

});

app.get('/about', (req, res)=>{

    res.send("About Page")

});

app.listen(3000, ()=>{
   console.log("Server Started Succefull on Port:3000");
})