const express=require('express')
const cors=require('cors');



const app =express();

app.use(express.json());
app.use(cors());



const baseURL="http://localhost:4004"

// write a axious GET method to '/api/movies' 
app.get(`/api/movies`, (req,res)=>{
console.log("hello this is the api/movies endpoint")
})


const controller =require('./controller')  
// using controller file call back function
app.get(`${baseURL}/api/movies`, controller.getMovies)

//delete movie using controller file call back function
app.delete('//api/movies/:id',controller.deleteMovie)

//create movie using controller file call back function
app.post('/api/movies',controller.createMovie);

//update movie using controller file call back function
app.put('api/movies/:id', controller.updateMovie)




//or we can use 
const {
    getMovies,
    deleteMovie,
    createMovie,
    updateMovie
} =require('./controller')  


app.get(`${baseURL}/api/movies`,getMovies)
app.delete('//api/movies/:id',deleteMovie)
app.post('/api/movies',createMovie);
app.put('api/movies/:id',updateMovie)



let port =4004;
app.listen(port, ()=> console.log(`we are up on the Port ${port}`))