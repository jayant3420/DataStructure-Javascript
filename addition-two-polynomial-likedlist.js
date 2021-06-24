/*
    --Application of Singly Linked List--
    Representation of polynomial ->  5x^3 - 3x^2 + 2x + 1

    --Logic--

    Maintain a sorted linked list in which there will be three section of (data1, data2, next). data1-> cofficient, data2-> exponent, next-> to reference the next object.
*/

class Term {
  constructor(cofficient, exponent = 0, nextTerm = null) {
    this.cofficient = cofficient;
    this.exponent = exponent;
    this.nextTerm = nextTerm;
  }
}

class PolynomialTerms {
  constructor() {
    this.head = null;
    this.totalTermCountPolynomial = 0;
  }

  /*Insert a Term in polynomial*/
  insertTerm(cofficient, exponent) {
    let currentTerm = new Term(cofficient, exponent);
    if (this.head === null || this.head.exponent < exponent) {
      currentTerm.nextTerm = this.head;
      this.head = currentTerm;
      currentTerm = null;
    } else {
      let temp = this.head;
      while (
        temp.nextTerm !== null &&
        temp.nextTerm.exponent > currentTerm.exponent
      ) {
        temp = temp.nextTerm;
      }
      /*Checking if inserting term having same exponent which already present in polynomial*/
      if (
        temp.exponent === currentTerm.exponent ||
        (temp.nextTerm !== null &&
          temp.nextTerm.exponent === currentTerm.exponent)
      ) {
        return; //Simply Return
      }

      /*If there is no same exponent available in polynomial then proceed further*/
      currentTerm.nextTerm = temp.nextTerm;
      temp.nextTerm = currentTerm;
      currentTerm = null;
    }
    this.totalTermCountPolynomial++;
  }

  /*Printing Polynomial*/
  printPolynomial() {
    if (!this.head) return;
    else {
      let temp = this.head;
      let term = "";
      while (temp) {
        term += `${[temp.cofficient, temp.exponent]} =>`;
        temp = temp.nextTerm;
      }
      term += null;
      console.log(term);
    }
  }
}

class additionPolynomial {
  constructor(ptr1, ptr2) {
    this.ptr1 = ptr1;
    this.ptr2 = ptr2;
    this.resultantPolynomial = null;
  }

  /*Addition of Two Polynomial*/
  additionPolynomial() {
    if (this.ptr1.Term !== null && this.ptr2.Term !== null) {
      let poly1 = this.ptr1;
      let poly2 = this.ptr2;
      this.resultantPolynomial = new PolynomialTerms();
      while (poly1 !== null && poly2 !== null) {
        if (poly1.exponent === poly2.exponent) {
          let sumTerm = poly1.cofficient + poly2.cofficient;
          this.resultantPolynomial.insertTerm(sumTerm, poly1.exponent);
          poly1 = poly1.nextTerm;
          poly2 = poly2.nextTerm;
        } else if (poly1.exponent > poly2.exponent) {
          this.resultantPolynomial.insertTerm(poly1.cofficient, poly1.exponent);
          poly1 = poly1.nextTerm;
        } else if (poly1.exponent < poly2.exponent) {
          this.resultantPolynomial.insertTerm(poly2.cofficient, poly2.exponent);
          poly2 = poly2.nextTerm;
        }
      }

      while (poly1 !== null) {
        this.resultantPolynomial.insertTerm(poly1.cofficient, poly1.exponent);
        poly1 = poly1.nextTerm;
      }

      while (poly2 !== null) {
        this.resultantPolynomial.insertTerm(poly2.cofficient, poly2.exponent);
        poly2 = poly2.nextTerm;
      }
    }
  }

  /*Printing Final Polynomial*/
  printResultPolynomial() {
    this.resultantPolynomial.printPolynomial();
  }
}

/*Creating First Polynomial*/
let polynomial1 = new PolynomialTerms();

polynomial1.insertTerm(7, 6);
polynomial1.insertTerm(5, 3);
polynomial1.insertTerm(2, 2);
polynomial1.insertTerm(1, 1);

console.log("Polynomial One:");
polynomial1.printPolynomial();
// console.log(polynomial1);

/*Creating Second Polynomial*/
let polynomial2 = new PolynomialTerms();

polynomial2.insertTerm(6, 7);
polynomial2.insertTerm(5, 6);
polynomial2.insertTerm(2, 3);
polynomial2.insertTerm(4, 2);
polynomial2.insertTerm(5, 1);
polynomial2.insertTerm(5, 0);

console.log("Polynomial Two:");
polynomial2.printPolynomial();
// console.log(polynomial2);

/*Addition Perform*/
let addition = new additionPolynomial(polynomial1.head, polynomial2.head);
addition.additionPolynomial();
addition.printResultPolynomial();
