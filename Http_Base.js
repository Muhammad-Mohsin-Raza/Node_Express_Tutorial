const http = require('http');
const server=http.createServer((req,res)=>{
    console.log(req.url)
    if (req.url ==='/'){
        res.end('Home Page')
    }
})
server.listen(5000)