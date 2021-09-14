const https = require('http')
const fs = require('fs')
const { type } = require('node:os')
const filecontent = fs.readFileSync('tut65.html')

const server =https.createServer((req, res)=>{
  
    res.writeHead(200, {'content-type':'text/html'});
})