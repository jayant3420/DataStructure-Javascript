/*
**Singly Linked List Functions**
1) Insert Node at Begin
2) Insert Node at Last
3) Insert Node at a certain Index Position
4) Delete Node from Front
5) Delete Node from Last
6) Delete Node at a certain Index Position
7) Insert Node in a sorted linked list in an order
*/

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

  /*Inserting a node in sorted singly linked list*/
  insertNodeSortedList(data) {
    if (!this.head) return;
    else {
      let current = new Node(data, null);
      let ptr = this.head;
      if (data <= ptr.data) {
        current.next = this.head;
        this.head = current;
      } else {
        while (ptr.next.data < data) {
          ptr = ptr.next;
        }
        current.next = ptr.next;
        ptr.next = current;
      }
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
ll.insertAtBegin(25);
ll.insertAtLast(30);
ll.insertAtLast(54);
ll.insertAtLast(72);
ll.insertAtLast(80);

/*Insert Node in sorted List*/
ll.insertNodeSortedList(75);

/*Printing List*/
ll.printList();

// console.log(ll);
