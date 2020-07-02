const http = require('http');

const server = http.createServer(function(req, res) {
    console.log('info: hello')
    console.error('a error happend')
    res.setHeader('Content-type', 'application/json')
    if (req.url === '/err') {
        throw new Error('new error')
    }
    res.end(
        JSON.stringify({
            errorno: 0,
            msg: 'pm2 test'
        })
    )
})

server.listen(3000, () => {
    console.log('server listen on port 3000')
})
