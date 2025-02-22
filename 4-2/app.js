import User from './userProfile.js';
import { add, substract } from './operations.js';

const user = new User('daisy', 24);
const result = substract(add(2, 3), 1);
console.log(user.greet());
console.log('연산 결과 : ', result);
