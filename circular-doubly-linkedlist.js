"use strict";

/*Creating Node*/
class Node {
  constructor(prev = null, data, next = null) {
    this.prev = prev;
    this.data = data;
    this.next = next;
  }
}

/*Circular Singly Linked List*/
class CircularDoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /*Insert Node at Begining*/
  insertAtBegin(data) {
    this.head = new Node(null, data, this.head);
    this.size++;
    if (this.size === 1) {
      this.head.next = this.head;
      this.head.prev = this.head;
      this.tail = this.head;
      return;
    }
    this.tail.next = this.head;
    this.head.prev = this.tail;
    this.head.next.prev = this.head;
  }

  /*Insert at Last*/
  insertAtLast(data) {
    if (!this.head) return;
    else {
      let current = new Node(null, data, null);
      current.prev = this.tail;
      this.tail.next = current;
      current.next = this.head;
      this.head.prev = current;
      this.tail = current;
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
        let current = new Node(ptr, data, ptr.next);
        current.prev = ptr;
        current.next.prev = current;
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
      this.tail.next = this.head;
      this.head.prev = this.tail;
      this.size--;
    }
  }

  /*Delete node from last*/
  deleteAtLast() {
    if (!this.head) return;
    else {
      // let ptr = this.head;
      // while (ptr.next !== this.tail) {
      //   ptr = ptr.next;
      // }
      // this.tail = ptr;
      // this.tail.next = this.head;
      // ptr = null;
      this.tail = this.tail.prev;
      this.tail.next = this.head;
      this.head.prev = this.tail;
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
        ptr.next.prev = ptr;
        this.size--;
      }
    }
  }

  /*Printing List*/
  printList() {
    let ptr = this.head;
    if (!ptr) return;
    else {
      while (ptr !== this.tail) {
        console.log(ptr.data);
        ptr = ptr.next;
      }
      console.log(ptr.data);
      ptr = null;
    }
  }

  /*Searching an Element*/
  searchElement(element) {
    if (!this.head) return;
    else {
      let temp = this.head;
      let flag = 0;
      let index = -1;
      do {
        index++;
        if (temp.data === element) {
          flag = 1;
          break;
        }
        temp = temp.next;
      } while (temp !== this.head);

      if (flag === 0) {
        return -1;
      } else {
        return index;
      }
    }
  }
}

let ll = new CircularDoublyLinkedList();
ll.insertAtBegin(1);
ll.insertAtBegin(2);
ll.insertAtBegin(3);
ll.insertAtBegin(4);
ll.insertAtLast(5);
ll.insertAtIndex(8, 4);
ll.deleteAtFront();
ll.deleteAtLast();
ll.deleteAtIndex(3);

/*Search for en element in circular linked list*/
let indexForElement = ll.searchElement(8);
if (indexForElement === -1) {
  console.log("Element Not Found");
} else {
  console.log(`Element found at index : ${indexForElement}`);
}

// ll.deleteAtIndex(ll.size);
ll.printList();

// console.log(ll.size);
console.log(ll);
