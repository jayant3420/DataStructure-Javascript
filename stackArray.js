/*Implementation of Stack using Array*/

class stackArray {
  constructor() {
    this.list = [];
    this.top = -1;
  }

  push(item) {
    this.list.push(item);
    this.top++;
    return `${item} pushed successfully`;
  }

  pop() {
    if (this.top === -1) return "Stack Underflow";
    this.top--;
    return `${this.list.pop()} poped successfully!!`;
  }

  topItem() {
    if (this.top === -1) return "Stack underflow";
    return `${this.list[this.top]} is the top item`;
  }

  isEmpty() {
    if (this.top === -1) return "yes, stack is empty";
    return "No, stack is not empty";
  }

  displayList() {
    if (this.top === -1) return "Stack Underflow";
    for (let i = this.top; i >= 0; i--) {
      console.log(this.list[i]);
    }
  }
}

//Instancing 'stackArray' class
const stack = new stackArray();

//Pushing items into stack
console.log(stack.push(12));
console.log(stack.push(16));
console.log(stack.push(31));
console.log(stack.push(84));

//Display items of stack
stack.displayList();

//Poping last item from stack
console.log(stack.pop());

//Display items of stack
stack.displayList();

//Getting top item from stack
console.log(stack.topItem());

//Checking if stack is empty or not
console.log(stack.isEmpty());

//Poping items from stack
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

//Checking if stack is empty or not
console.log(stack.isEmpty());
