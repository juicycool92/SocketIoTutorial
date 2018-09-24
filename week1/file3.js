//using user package 
const http = require('http');
const url = require('url');
const querystr = require('querystring');

const hostname = '127.0.0.1';
const port = '8080';
const server = http.createServer((req,res)=>{
    console.log('--log start--');
    var parseURL = url.parse(req.url);
    console.log(parseURL);
    //query의 실제 받는것을 확인 할 수 있다.
    
    var parsedQuery  =querystr.parse(parseURL.query,'&','=');
    console.log(parsedQuery);

    var result = parsedQuery.key;
    console.log('전달받은 var1 :'+result);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('<H1>Hello world</H1>');
    res.end(result);
});

//get 요청의 예시. http://naver.com/Post.nhn?postId=3572432&cafeId=158763
// ? 다음 오는 변수명=값 & 이런 방식을 Query string 

server.listen(port,hostname,()=>{
    console.log(`server running at http://` + hostname + ':'+port);
});