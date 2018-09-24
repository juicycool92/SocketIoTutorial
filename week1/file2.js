//create server 

//require 에 대한 설명을 다시한번 간단하게 한다.
//그리고 외부 패키지를 끌어다 와서 사용하는 예제도 확인한다.

const http = require('http');
const hostname = '127.0.0.1';
const port = '8080';
//const server = http.createServer((req,res)=>{
//    res.statusCode = 200;
//    res.setHeader('Content-Type', 'text/plain');
//    res.end('hello world');
//});

//https://developer.mozilla.org/ko/docs/Web/HTTP/Basics_of_HTTP/MIME_types
//header 의 뜻.

server.listen(port,hostname,()=>{
    console.log(`server running at http://` + hostname + ':'+port);
});
//간단한 서버 생성 절차.

//get 요청에 대해서 다음장에 설명