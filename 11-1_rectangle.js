class Rectangle {
  constructor(width, height) {
    this.height = height;
    this.width = width;
  }
  area = () => {
    return this.width * this.height;
  };
  perimeter = () => {
    return 2 * (this.height + this.width);
  };
}

export { Rectangle };
