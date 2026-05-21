const express = require('express')

const app = express()

app.get('/',(req, res)=>{
    res.send("Hello Arsh updated")
})

const server = app.listen(3000, ()=>{
    console.log("Severing listening on port 3000")
})

module.exports = server