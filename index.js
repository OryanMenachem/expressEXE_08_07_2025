import express from "express";


const PORT = 6000;

const server = express();


server.get('/greet', (req,res) => {


    const msg =  {"msg": `Hi from get endpoint ${new Date().toLocaleTimeString()}` }

    res.send(JSON.stringify(msg, null, 2))
})


server.listen(PORT, () => {

    console.log(`Server listening on port ${PORT}...`);
    
})



