/*
    --Application of Linked List--

    Multiplication of two polynomials--

    poly1 -> 4x^3 + 3x^2 + 1
    poly2 -> 5x^3 + 7x + 5

    Result -> 20x^6 + 15x^5 + 28x^4 + 46x^3 + 15x^2 + 7x + 5
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
      /*If duplicate exponent comes then add their cofficient*/
      if (temp.exponent === currentTerm.exponent) {
        temp.cofficient = temp.cofficient + currentTerm.cofficient;
        return;
      } else if (
        temp.nextTerm !== null &&
        temp.nextTerm.exponent === currentTerm.exponent
      ) {
        //Adding the cofficients of current and temp
        temp.nextTerm.cofficient =
          temp.nextTerm.cofficient + currentTerm.cofficient;
        return;
      } else {
        /*If there is no same exponent available in polynomial then proceed further*/
        currentTerm.nextTerm = temp.nextTerm;
        temp.nextTerm = currentTerm;
        currentTerm = null;
      }
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

class multiplyPolynomials {
  constructor(ptr1, ptr2) {
    this.poly1 = ptr1;
    this.poly2 = ptr2;
    this.resultantPolynomial = null;
  }

  /* --Multiply Function--  */
  multiplicationPoly() {
    if (this.poly1 !== null && this.poly2 !== null) {
      let head1 = this.poly1;
      let head2 = this.poly2;
      this.resultantPolynomial = new PolynomialTerms();
      while (head1 !== null) {
        while (head2 !== null) {
          let sum = head1.cofficient * head2.cofficient;
          let expo = head1.exponent + head2.exponent;
          this.resultantPolynomial.insertTerm(sum, expo);
          head2 = head2.nextTerm;
        }
        head1 = head1.nextTerm;
        head2 = this.poly2;
      }
    }
  }

  /*Printing Resultant Polynomial*/
  printPolynomial() {
    this.resultantPolynomial.printPolynomial();
  }
}

/*Creating First Polynomial*/
let polynomial1 = new PolynomialTerms();

polynomial1.insertTerm(4, 7);
polynomial1.insertTerm(2, 6);
polynomial1.insertTerm(5, 4);
polynomial1.insertTerm(3, 2);
polynomial1.insertTerm(1, 1);

console.log("Polynomial One:");
polynomial1.printPolynomial();
// console.log(polynomial1);

/*Creating Second Polynomial*/
let polynomial2 = new PolynomialTerms();

polynomial2.insertTerm(5, 6);
polynomial2.insertTerm(2, 3);

console.log("Polynomial Two:");
polynomial2.printPolynomial();
// console.log(polynomial2);

let mul = new multiplyPolynomials(polynomial1.head, polynomial2.head);
mul.multiplicationPoly();
mul.printPolynomial();

/*
    --Output--

    Polynomial One:
    4,7 =>2,6 =>5,4 =>3,2 =>1,1 =>null
    Polynomial Two:
    5,6 =>2,3 =>null
    20,13 =>10,12 =>33,10 =>4,9 =>15,8 =>15,7 =>6,5 =>2,4 =>null
*/
