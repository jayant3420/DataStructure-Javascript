"use strict";

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

  /*Insert Node at Begining*/
  insertAtBegin(data) {
    this.head = new Node(data, this.head);
    this.size++;
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
        let current = new Node(data);
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

  /*Insert at Last*/
  insertAtLast(data) {
    if (!this.head) return;
    else {
      let lastNode = this.head;
      while (lastNode.next !== null) {
        lastNode = lastNode.next;
      }
      let current = new Node(data);
      lastNode.next = current;
      this.size++;
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

let ll = new LinkedList();
ll.insertAtBegin(1);
ll.insertAtBegin(2);
ll.insertAtBegin(3);
ll.insertAtLast(4);
ll.insertAtIndex(5, 2);
// ll.deleteAtFront();
// ll.deleteAtLast();

ll.deleteAtIndex(ll.size);

ll.printList();

console.log(ll.size);
// console.log(ll);
