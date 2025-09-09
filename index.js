import express from 'express'
const app = express()

app.use(express.urlencoded({ extended: false }));

app.set("view engine", 'ejs')
app.use(express. static("public"))
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

app.get('/form', (req, res)=>{

       res.render("form", {message:null})
})

app.post('/submit', (req, res)=>{

    const name = req.body.myname

    const message = `Hello, ${name} Your Form Has Submited`

        res.render("form", {message:message})
})

app.listen(3000, ()=>{
   console.log("Server Started Succefull on Port:3000");
})