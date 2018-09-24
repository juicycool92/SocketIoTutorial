//beginner for nodeJS

var a = 10;
console.log(a);
console.log(typeof(a));

var b = "Hello world";
console.log(b);
console.log(typeof(b));

var c = []
console.log(c);
console.log(typeof(c));

var a = 11; //이미 a 변수가 있지만, 제선언이 가능함을 보여주며,
console.log(a);
a=11;       //값의 정의 또한 문제가 없음을 보여준다.
console.log(a);

let d;      //let타입으로 선언하여
d = 10;     //값을 초기화한다.
console.log(d);
d=11;       //값의 정의는 아무 문제가 없으나,
console.log(d);
let d = 10; //제 선언은 문제가 발생함을 보여준다.
console.log(d);//let 데이터타입은 var과는 다릴 제정의가 불가능하다.
//추가적인 scope 범위의 설명은 추후 한다고 하며, const도 보여주자
const e; // 선언단계까지만 해서는 에러가 뜸을 보여준다,
const e = 10; //선언과 정의가 동시에 이루어져야함을 보여준다
console.log(e);
e = 11; // 제정의는 문제가 있다. const는 상수화를 시키는 행위이다.

setInterval(function(){
    console.log(/*insertVars*/);
},5000)(1000);
//뭔지는 몰라도 되게 유도하고, 34번 라인 안에 var let const 를 넣어 범위를 알아보자

//각 원시 타입 데이트를 간단하게 설명하고, object 객체에 대하여 간단하게 설명한다.


//비동기 처리에 대한 간단 설명.
//기존의 프로그램은 멀티 쓰레드가 지원된다, 일반적인 web의 경우에는 멀티 쓰레드를 이용했었으며, 이런 경우에 발생 할 수 있는 문제를 간단하게 예시를 든다.
//이러한 이유로 Node의 등장을 소개한다.
var fs = require('fs')
fs.readdir('./',function(err, filename){
    //call back
    console.log(filename)
});
console.log('read dir async done')

//간단한 예제를 보여준 뒤에 이 방식으로 얻을 수 있는 간단한 장점을 설명한다.
var files = fs.readdirSync('./');
console.log(files);
console.log('read dir sync done')

//이렇게 동기화 방식으로도 작동 할 수 있음을 설명한다.

//이때 같이 간단하게 quene 에 대한 소개도 하자.

