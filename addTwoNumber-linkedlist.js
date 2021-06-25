/*
    --Addition of Two Numbers using Linked List--

        4 -> 6 -> 3 -> 9  (Number1 representation using Linked List)
        +    3 -> 6 -> 5  (Number2 representation using Linked List)
      --------------------
        5 -> 0 -> 0 -> 4  (Sum representation using Linked List)
      --------------------   
*/

// "use strict";

/*Creating Node*/
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

/*Singly Linked List*/
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  /*Adding digits in linked list*/
  insertNumDigit(num) {
    if (num == 0) {
      this.insertAtBegin(num);
    } else {
      while (num !== 0) {
        let rem = num % 10;
        this.insertAtBegin(rem);
        num = Math.floor(num / 10);
      }
    }
  }

  /*Insert Node at Begining*/
  insertAtBegin(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  /*Insert at Last*/
  insertAtLast(data) {
    if (!this.head) return;
    else {
      let lastNode = this.head;
      while (lastNode.next !== null) {
        lastNode = lastNode.next;
      }
      let current = new Node(data, null);
      lastNode.next = current;
      lastNode = current = null;
      this.size++;
    }
  }

  /*Insert node at an Index*/
  insertAtIndex(data, index) {
    /*Checking if list is empty or index is out of range*/
    if (!this.head || index < 0 || index > this.size - 1) return;
    else {
      if (index === 0) {
        this.insertAtBegin(data);
      } else if (index === this.size - 1) {
        this.insertAtLast(data);
      } else {
        let ptr = this.head;
        for (let i = 0; i < index - 1; i++) {
          ptr = ptr.next;
        }
        let current = new Node(data, null);
        current.next = ptr.next;
        ptr.next = current;
        this.size++;
      }
    }
  }

  /*Delete node from front*/
  deleteAtFront() {
    if (!this.head) return;
    else {
      this.head = this.head.next;
      this.size--;
    }
  }

  /*Delete node from last*/
  deleteAtLast() {
    if (!this.head) return;
    else {
      let ptr = this.head;
      while (ptr.next.next !== null) {
        ptr = ptr.next;
      }
      ptr.next = null;
      this.size--;
    }
  }

  /*Delete node at index*/
  deleteAtIndex(index) {
    if (!this.head || index < 0 || index > this.size - 1) return;
    else {
      if (index === 0) {
        this.deleteAtFront();
      } else if (index === this.size - 1) {
        this.deleteAtLast();
      } else {
        let ptr = this.head;
        for (let i = 0; i < index - 1; i++) {
          ptr = ptr.next;
        }
        ptr.next = ptr.next.next;
        this.size--;
      }
    }
  }

  reverseList() {
    if (!this.head) return;
    else {
      let prev = null;
      let next = null;
      while (this.head !== null) {
        next = this.head.next;
        this.head.next = prev;
        prev = this.head;
        this.head = next;
      }
      this.head = prev;
    }
  }

  /*Printing List*/
  printList() {
    let ptr = this.head;
    if (!ptr) return;
    else {
      while (ptr) {
        console.log(ptr.data);
        ptr = ptr.next;
      }
    }
  }
}

class sumTwoNumbers {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
    this.resultSum = null;
  }

  addTwoNumbers() {
    if (this.num1 !== null && this.num2 !== null) {
      this.resultSum = new LinkedList();
      let ptr1 = this.num1;
      let ptr2 = this.num2;
      let carry = 0;
      let lastDigit = 0;
      //   console.log("Number in two objects : ");
      //   console.log(ptr1, ptr2);
      while (ptr1 !== null && ptr2 !== null) {
        let sum = ptr1.data + ptr2.data + carry;
        if (sum <= 9 && sum >= -9) {
          this.resultSum.insertAtBegin(sum);
          carry = 0;
        } else {
          let sumDigit = Math.floor(sum % 10);
          carry = Math.floor(sum / 10);
          this.resultSum.insertAtBegin(sumDigit);
        }
        lastDigit = sum;
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
      }

      while (ptr1 !== null) {
        let sum = ptr1.data + carry;
        if (sum <= 9 && sum >= -9) {
          this.resultSum.insertAtBegin(sum);
          carry = 0;
        } else {
          let sumDigit = Math.floor(sum % 10);
          carry = Math.floor(sum / 10);
          this.resultSum.insertAtBegin(sumDigit);
        }
        lastDigit = sum;
        ptr1 = ptr1.next;
      }

      while (ptr2 !== null) {
        let sum = ptr2.data + carry;
        if (sum <= 9 && sum >= -9) {
          this.resultSum.insertAtBegin(sum);
          carry = 0;
        } else {
          let sumDigit = Math.floor(sum % 10);
          carry = Math.floor(sum / 10);
          this.resultSum.insertAtBegin(sumDigit);
        }
        lastDigit = sum;
        ptr2 = ptr2.next;
      }

      if (ptr1 === null && ptr2 === null && lastDigit >= 9 && carry !== 0) {
        this.resultSum.insertAtBegin(carry);
      }
    }
  }

  /*Printing Final Result*/
  printList() {
    this.resultSum.printList();
  }
}

console.log("Number 1 : ");
let num1 = new LinkedList();
num1.insertNumDigit(99999);
num1.reverseList();
num1.printList();

console.log("Number 2 : ");
let num2 = new LinkedList();
num2.insertNumDigit(999);
num2.reverseList();
num2.printList();

console.log("Final Sum : ");
let finalResult = new sumTwoNumbers(num1.head, num2.head);
finalResult.addTwoNumbers();
finalResult.printList();
