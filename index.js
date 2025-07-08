import express from "express";
import {sendGet} from "./httpRequests.js"


const PORT = 6000;

const server = express();


server.get('/greet', (req,res) => {


    const msg =  {msg: `Hi from get endpoint ${new Date().toLocaleTimeString()}` }

    res.send(JSON.stringify(msg, null, 2))
})

server.get('/greet/:name', (req,res) => {

    console.log(`I got name:`, req.params.name);
    
    const msg = { msg: `got name: ${req.params.name}` }

    if ("msg" in msg) {

        if (req.params.name) {

                res.send(JSON.stringify({ "result": "ok" }, null, 2))
        }
     }
     else {
         res.send(JSON.stringify({ "result": "fail" }, null, 2))
     }


     

})

server.get('/test', async (req,res) => {
    
    
   const data = await sendGet("http://localhost:6000/greet/bob")

   res.send(JSON.stringify(data, null, 2))
})




server.listen(PORT, () => {

    console.log(`Server listening on port ${PORT}...`);
    
})


// curl localhost:6000/greet/Alice
