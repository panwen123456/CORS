const http = require('http')
const url = require('url')

http.createServer((req, res) => {
  let urlObj = url.parse(req.url, true) 
  if(urlObj.pathname === '/getWeather') {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500')
    res.end(JSON.stringify({city: 'hangzhou', weather: 'sunny'}))
  } else {
    res.writeHead(404, 'Not Found')
    res.end('not found')
  }
}).listen(8888)