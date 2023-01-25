function Cookie() {
  this.name = 'Happy Cookie';
  this.message;
}

Cookie.prototype.setMessage = function (msg) {
  this.message = msg;
};
Cookie.prototype.getMessage = function () {
  return this.message;
};

// exports 명령어로 내보낸 클래스는 require 예약어를 이용하여 다른 파일에서도 접근 가능하다
module.exports = Cookie;
