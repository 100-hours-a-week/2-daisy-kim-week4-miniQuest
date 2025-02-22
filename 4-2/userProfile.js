class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet = function () {
    return `반갑습니다. ${this.age}세, ${this.name}님 환영합니다.`;
  };
}
export default User;
