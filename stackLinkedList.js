/*Stack Implementing using Linked List*/

const { timeStamp } = require("console");

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class stackLinkedList {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  //Push an Item
  push(item) {
    let current = new Node(item);
    current.next = this.top;
    this.top = current;
    this.size++;
    return `${item} pushed successfully`;
  }

  //Pop an Item
  pop() {
    if (this.isEmpty()) return;
    let item = this.top.data;
    this.top = this.top.next;
    this.size--;
    return `${item} poped successfully`;
  }

  //Getting top item from stack
  topItem() {
    if (this.isEmpty()) return;
    return this.top.data;
  }

  //display items
  displayItem() {
    if (this.isEmpty()) return;
    let ptr = this.top;
    while (ptr) {
      console.log(ptr.data);
      ptr = ptr.next;
    }
  }

  //isEmpty()
  isEmpty() {
    if (!this.top) return true;
    return false;
  }
}

const stack = new stackLinkedList();

//items pushing
console.log(stack.push(54));
console.log(stack.push(1));
console.log(stack.push(56));
console.log(stack.push(74));
console.log(stack.push(98));

//displaying items
stack.displayItem();

//poping items
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

//displaying items
stack.displayItem();

//topitem
console.log(stack.topItem());

//checking stack is empty or not
console.log(stack.isEmpty());
