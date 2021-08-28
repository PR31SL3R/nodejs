const express = require("express");  //imports and saves variable
const app = express(); // instantiates server


app.get("/", (req, res) => {
    //Send a response
    
    res.send("<h1>test</h1>");
    
    })

    app.get("/route", (req, res) => {
        //Send a response
        //returns an empty json
        //req return js object
        console.log(req.query);
        res.send({ });
        
        })

        app.get("/search", (req, res) => {
            //Send a response
            //returns an empty json
    
            //req return js object
            //send back querystring
            console.log(req.query);
            res.send({searchquery: req.query});
            
            })

            //send back message to the client
            //app.get("/telegram/:message", (req,res) => {​​

            //    const messages = req.params
            
              //  res.send({messages}​​)
            
            //}​​);

          //  app.get("/telegram/:message", (req,res) => {​​

          //      const messages = req.params;
            
           //     res.send({​​messages}​​);
            
          //  }​​);

          //  app.get("/telegram/:message/:name", (req, res) => {​​

          //      const msg = req.params.message;
                
           //     const nme = req.params.name;
                
           //     res.send({​​name: nme,message: msg}​​);
                
          //      }​​)
            

// post

//body is undefined
//
app.post("/goodstuff", (req,res) => {

    //postman http client
    console.log(req.body)

    res.send({body: req.body})
})


if (undefined){console.log("getting to line 25")}

const cat = require("./cat.json");
console.log(cat); // server on a route called cat

app.get("/cat", (req, res) => {
  //Send a response
  //returns an empty json
  //req return js object
  console.log({cat});
  res.send({ });
  
  })
            


//keep on bottom - starts the server
app.listen(9090, (error) => {
  if (error){
    console.log(error)
  }
  console.log("server is running on port", 9090)
});



//starter server process
//create package.json ()remember empty {}
//              inside file key -values {{
//              "dependencies": {
//                 "express": "^4.17.1"
//                 }}}
//npm install - intalls all dependencies


//how to send data with a GETrequest
//guerystring // query paramerter
//localhost:8080?key=value&anotherkey=anothervalue


// searching. - how to send data    

//querystrings are ugly un searchengines because of availability to copy querys



//path paramerter // path variables /user/1






//
//
//
//
//
//
//
//
//


