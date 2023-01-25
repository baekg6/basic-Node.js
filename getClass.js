let CookieClass = require('./nodeClass');
let newCookie = new CookieClass();

newCookie.setMessage('Happy Birthday!');
console.log(newCookie.getMessage());
