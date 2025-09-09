import express from 'express'
const app = express()



app.set("view engine", 'ejs')
app.get('/', (req, res)=>{

    res.send("Home Page")

});

app.get('/about', (req, res)=>{

        // let items =["Apple", "Mango", "Banana"]; 

        var users = [
                    { id: 1, name: "Anupam", email: "anupam@example.com" },
                    { id: 2, name: "Rahul", email: "rahul@example.com" },
                    { id: 3, name: "Suman", email: "suman@example.com" }
                ];
                    res.render("about", {
                                    title: 'About Page',
                                    message:"Welcome", 
                                    items:users

                                })

});

app.listen(3000, ()=>{
   console.log("Server Started Succefull on Port:3000");
})