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
        temp.nextTerm.exponent === currentTerm.exponent
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

let polynomial = new PolynomialTerms();

/*Input Given*/
polynomial.insertTerm(5);
polynomial.insertTerm(3, 2);
polynomial.insertTerm(4, 3);
polynomial.insertTerm(8, 1);

//This following input-terms will be excluded because exponent = 1 is already present in polynomial
polynomial.insertTerm(8, 1);
polynomial.insertTerm(10, 1);

//This will also excluded
polynomial.insertTerm(8, 3);
polynomial.insertTerm(5);

//Printing polynomial
polynomial.printPolynomial();

//console.log(polynomial);
