import User from './userProfile.js';
import { add, substract } from './operations.js';

const user = new User('daisy', 24);
const result = substract(add(2, 3), 1);
console.log(user.greet());
console.log('연산 결과 : ', result);

/*
greet()함수에서 return 없이 콘솔 출력을 하면
app.js에서는 콘솔 함수 없이 greet함수 호출만 하면 됨
*/
