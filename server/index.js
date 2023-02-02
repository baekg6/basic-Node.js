// 1. 서버 사용을 위한 http 모듈 선언
let http = require('http');

// 2. http 모듈로 서버슬 생성
// - 사용자로부터 http 요청이 들어오면 function 내부 코드를 실행
let server = http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-type': 'text/plain' });
  response.end('Hello world!\n'); // 응답 종료
});

// 3. 8000 포트를 가진 서버를 실행
server.listen(8000, () => {
  console.log('Server running at http://localhost:8000');
});
