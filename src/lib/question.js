class Question {
  contructor() {
    this.type = null;
    this.a = 0;
    this.b = 0;
    this.answer = 0;
    this.choices = null;
  }
  
  generateQuestion(type) {
    let given;
    switch (type) {
      case 'addition':
        given = this.add();
        this.a = given.intOne;
        this.b = given.intTwo;
        this.answer = given.sum;
        break;
      case 'multiplication':
        given = this.multiply();
        this.a = given.intOne;
        this.b = given.intTwo;
        this.answer = given.product;
        break;
      case 'subtraction':
        given = this.add();
        this.a = given.sum;
        this.b = given.intOne;
        this.answer = this.a - this.b;
        break;
      case 'division':
        given = this.multiply();
        this.a = given.product;
        this.b = given.intOne;
        this.answer = this.a / this.b
        break;
      default:
        return undefined;
    }
    this.type = type;
    this.choices = this.generateChoices(this.answer, this.type);
    return this;
  }

  generateChoices(answer, type) {
    let choices = new Array(4);
    const correctIdx = Math.floor(Math.random() * 3) + 1;
    choices[correctIdx] = answer;
    for (let i = 0; i < choices.length; i++) {
      if (!choices[i]) {
        let res, given;
        switch (type) {
          case 'addition':
            do {
              res = this.add().sum;
            } while (choices.indexOf(res) > -1)
            choices[i] = res;
            break;
          case 'multiplication':
            do {
              res = this.multiply().product;
            } while (choices.indexOf(res) > -1)
            choices[i] = res;
            break;
          case 'subtraction':
            do {
              given = this.add()
              res = given.sum - given.intOne;
            } while (choices.indexOf(res) > -1)
            choices[i] = res;
            break;
          case 'division':
            do {
              given = this.multiply();
              res = given.product / given.intOne;
            } while (choices.indexOf(res) > -1)
            choices[i] = res;
            break;
        }
      }
    }
    return choices;
  }

  add() {
    const intOne = Math.floor(Math.random() * 49) + 1;
    const intTwo = Math.floor(Math.random() * 49) + 1;
    const sum = intOne + intTwo;
    return { intOne, intTwo, sum }
  }

  multiply() {
    const intOne = Math.floor(Math.random() * 9) + 1;
    const intTwo = Math.floor(Math.random() * 9) + 1;
    const product = intOne * intTwo;
    return { intOne, intTwo, product }
  }

}

export default Question;