var MinStack = function () {
  this.stack = [];
  this.minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  this.minStack.push(
    this.minStack.length ? Math.min(val, this.minStack.at(-1)) : val
  );
  console.log(this.minStack);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
  this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack.at(-1);
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  console.log("this.minStack :>> ", this.minStack);
  return this.minStack.at(-1);
};

//  Your MinStack object will be instantiated and called as such:
var obj = new MinStack();
obj.push(-2);
obj.push(0);
obj.push(-3);
var param_4 = obj.getMin();
obj.pop();
var param_3 = obj.top();
var param_5 = obj.getMin();

console.log("param_3 :>> ", param_3);
console.log("param_4 :>> ", param_4);
console.log("param_5 :>> ", param_5);
