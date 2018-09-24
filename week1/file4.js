//이제 외부 패키지를 사용하는 법에 대해 알려준다
//사용할 모듈은 express 이며, 장점으로 
const http = require('http');
const url = require('url');
const express = require('express');
const PORT = 8080;

const app = express();

app.get('/',(req,res)=>{
    console.log(req.query);
    res.send();
});

app.listen(PORT,()=>{
    console.log('express server is up and running!');
});

//localhost:8080/?param=value&param2=values2
//를 찍어서 반응을 유도 해 보자.
//GET POST PUT DELETE 에 대해 간략하게 설명해 주자.