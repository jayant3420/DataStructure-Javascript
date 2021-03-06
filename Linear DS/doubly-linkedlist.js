/*Creating a Node*/
class Node {
  constructor(prev = null, data, next = null) {
    this.prev = prev;
    this.data = data;
    this.next = next;
  }
}

/*Creating a Doubly Linked List*/
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  /*insert node at begining*/
  insertAtBegin(data) {
    this.head = new Node(null, data, this.head);
    this.size++;
    if (this.head.next === null) return;
    else {
      this.head.next.prev = this.head;
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
      let current = new Node(lastNode, data, null);
      lastNode.next = current;
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
      this.head.prev = null;
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
      ptr.next.prev = null;
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
        ptr.next.prev = ptr;
        this.size--;
      }
    }
  }

  /*Printing List Forward*/
  printListForward() {
    let ptr = this.head;
    if (!ptr) return;
    else {
      while (ptr) {
        console.log(ptr.data);
        ptr = ptr.next;
      }
    }
  }

  /*Printing List Backward*/
  printListBackward() {
    let ptr = this.head;
    if (!ptr) return;
    else {
      /*Try to reaching to last node*/
      while (ptr.next !== null) {
        ptr = ptr.next;
      }

      /*Printing all the nodes from the last node*/
      while (ptr) {
        console.log(ptr.data);
        ptr = ptr.prev;
      }
    }
  }
}

let ll = new DoublyLinkedList();

ll.insertAtBegin(4);
ll.insertAtBegin(3);
ll.insertAtBegin(2);
ll.insertAtBegin(1);
ll.insertAtLast(5);
ll.insertAtLast(6);
ll.insertAtIndex(7, 3);
ll.deleteAtFront();
ll.deleteAtLast();
ll.deleteAtIndex(2);

console.log("Printing List Forward Direction : ");
ll.printListForward();

console.log("Printing List in Backward Direction : ");
ll.printListBackward();

//console the node
console.log(ll);
