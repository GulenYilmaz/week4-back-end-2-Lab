const movies=require('./db.json')// need .js  objects


module.exports={

    //get movie call back function 
    //frond end response
    getMovies:(req,res)=>{
        console.log("hellothis is the api/movies endpoint");
        res.status(200).send(movies);
    },

    //delete movie call back functions which takes in params movieId and finds that movie and delete it
    deleteMovie :(req,res)=>{
        let movieIndex= movies.find((movie) => movie.id=== req.params.id);
        movies.splice(movieIndex,1);
        res.status(200).send(movies)   
    },
    
    //create movie call back functions with takes in req.body and create a new object with those  req.body prpperties.Then  push the new   object into the movies array  and send back 200codes movie list
    createMovie:(req,res)=>{
    //let{title,rating,imageURL}=req.body;
        
    let newMovie ={
        id:globalId,
        title:req.body.title,
        reting:req.ody.rating,
        imageURL:req.body.imageURL,
    };
    movies.push(newMovie);
    res.status(200).send(movies);
   globalId++
    },



    //write out a method called updateMovie that takes in the req object and finds the correct movie in the movie array and updates properties correctly. Then send back a 200 code and the movie list
    
    updateMovie:(req,res)=>{
      let requestId=req.params.id;
      let movieIndex=movies.findIndex((movie)=> movie.id ===parseInt(req.params.id))
        if(req.body.type === "plus"){
            movies[movieIndex].rating++
        }else if(req.body.type === "minus"){
            movies[movieIndex].rating--
        }
        res.status(200).send(movies);



      console.log(requestId,movie);
    }
};