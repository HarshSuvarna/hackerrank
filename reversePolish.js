var evalRPN = function (tokens) {
    let stack = [];
    for (let i = 0; i < tokens.length; i++) {
      let res = 0;
      switch (tokens[i]) {
        case "+":
          stack.push(+stack.pop() + +stack.pop());
          break;
        case "-":
          b = +stack.pop();
          a = +stack.pop();
          stack.push(a - b);
          break;
  
        case "*":
          stack.push(+stack.pop() * +stack.pop());
          break;
  
        case "/":
          b = +stack.pop();
          a = +stack.pop();
          let val = a / b <= 0 ? Math.ceil(a / b) : Math.floor(a / b);
          stack.push(val);
          break;
  
        default:
          stack.push(tokens[i]);
          break;
      }
    }
    return stack[0];
  };

console.log(evalRPN(["2", "1", "+", "3", "*"]));
