"use strict";

/*Creating Node*/
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

/*Circular Singly Linked List*/
class CircularLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
    this.tail = null;
  }

  /*Insert Node at Begining*/
  insertAtBegin(data) {
    this.head = new Node(data, this.head);
    this.size++;
    if (this.size === 1) {
      this.head.next = this.head;
      this.tail = this.head;
    }
  }

  /*Insert at Last*/
  insertAtLast(data) {
    if (!this.head) return;
    else {
      let current = new Node(data);
      this.tail.next = current;
      this.tail = current;
      current.next = this.head;
      current = null;
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
      this.tail.next = this.head;
      this.size--;
    }
  }

  /*Delete node from last*/
  deleteAtLast() {
    if (!this.head) return;
    else {
      let ptr = this.head;
      while (ptr.next !== this.tail) {
        ptr = ptr.next;
      }
      this.tail = ptr;
      this.tail.next = this.head;
      ptr = null;
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
}

let ll = new CircularLinkedList();

ll.insertAtBegin(1);
ll.insertAtBegin(2);
ll.insertAtBegin(3);
ll.insertAtLast(4);
ll.insertAtBegin(4);
ll.insertAtBegin(5);
ll.insertAtLast(0);
ll.insertAtIndex(7, 3);
ll.deleteAtLast();
ll.deleteAtFront();
ll.deleteAtIndex(4);
ll.deleteAtIndex(0);

// ll.deleteAtIndex(ll.size);
ll.printList();

// console.log(ll.size);
// console.log(ll);
