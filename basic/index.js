// class 선언
function Cookie(taste) {
  // 변수를 객체의 멤버로 사용 (this로 정의)
  this.name = taste + ' cookie';
  this.taste = taste;

  message = 'Taste me!';
  this.say = function () {
    console.log(message);
  };
}

// 객체 생성
let myCookie = new Cookie('Choco');
console.log(myCookie.name);
myCookie.say();

Cookie.prototype.getTaste = function () {
  return this.taste;
};
console.log(myCookie.getTaste());
