var http = require('http')
  , fs   = require('fs')
  , url  = require('url')
  , port = 8080;

// database
const pg = require('pg');
const dbURL = process.env.DATABASE_URL + "?ssl=true";

var server = http.createServer (function (req, res) {
  var uri = url.parse(req.url)

  switch( uri.pathname ) {
    case '/':
      sendFile(res, 'public/index.html')
      break
    case '/index.html':
      sendFile(res, 'public/index.html')
      break
    case '/profilePage.html':
      sendFile(res, 'public/profilePage.html')
      break
    case '/signUpForm.html':
      sendFile(res, 'public/signUpForm.html')
      break
    case '/css/style.css':
      sendFile(res, 'public/css/style.css', 'text/css')
      break
	case '/css/SignupProfileStyle.css':
      sendFile(res, 'public/css/SignupProfileStyle.css', 'text/css')
      break
    case '/js/scripts.js':
      sendFile(res, 'public/js/scripts.js', 'text/javascript')
      break
	case '/js/SignUpscripts.js':
      sendFile(res, 'public/js/SignUpscripts.js', 'text/javascript')
      break
    default:
      res.end('404 not found')
  }
})

server.listen(process.env.PORT || port);
console.log('listening on 8080')

// subroutines

function sendFile(res, filename, contentType) {
  contentType = contentType || 'text/html';

  fs.readFile(filename, function(error, content) {
    res.writeHead(200, {'Content-type': contentType})
    res.end(content, 'utf-8')
  })

}
