let http = require('http');

// 1. 요청 url 처리를 위하여 url 모듈, querystring 모듈 사용
let url = require('url');
var querystring = require('querystring');

let server = http.createServer(function (request, response) {
  // 2. 브라우저 요청 주소를 파싱하여 객체화
  let parsedUrl = url.parse(request.url);
  // console.log('parsedUrl > ', parsedUrl);

  let parsedQuery = querystring.parse(parsedUrl.query, '&', '=');
  // console.log('parsedQuery > ', parsedQuery);

  response.writeHead(200, { 'Content-type': 'text/plain' });
  for (const [key, value] of Object.entries(parsedQuery)) {
    response.write(`${key}의 값은 ${value}\n`);
  }
  response.end();
});

server.listen(8000, () => {
  console.log('Server running at http://localhost:8000');
});
