let http = require('http');
var querystring = require('querystring');

let server = http.createServer(function (request, response) {
  let postdata = '';
  request.on('data', function (data) {
    postdata = postdata + data;
  });

  request.on('end', function () {
    let parsedQuery = querystring.parse(postdata);
    console.log(parsedQuery);
    response.writeHead(200, { 'Content-type': 'text/plain;charset=UTF-8' });
    for (const [key, value] of Object.entries(parsedQuery)) {
      response.write(`${key}의 값은 ${value}\n`);
    }
    response.end();
  });
});

server.listen(8000, () => {
  console.log('Server running at http://localhost:8000');
});
