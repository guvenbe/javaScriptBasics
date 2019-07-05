/////////////////////////////////////////
// Function constructor


/*
var john ={
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

//
var Person =  function( name, yearOfBirth, job){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;

};

Person.prototype.calculateAge =  function () {
    console.log(2016 - this.yearOfBirth);
}

Person.prototype.lastName='Guven'

var john =new Person('John',1990, 'teacher');
var jane = new Person('Jane',1969,'designer');
var mark = new Person('Mark', 1949,'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();


console.log(john.lastName);
console.log(john.lastName);
console.log(mark.lastName);


console.log(john.hasOwnProperty('job'));
console.log(john.hasOwnProperty('lastName'));
console.log(john instanceof Person);


/////////////////////////////
// Lecture: Object.create
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};
var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';
var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }
});



/////////////////////////////
// Lecture: Primitives vs objects
// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);
// Objects
var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);
// Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};
function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}
change(age, obj);
console.log(age);
console.log(obj.city);
*/

/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}*/


/*function interviewQuestion(job) {
    return function(name){
        if (job === 'designer') {
                console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
                console.log('What subject do you teach, ' + name + '?');
        } else {
                console.log('Hello ' + name + ', what do you do?');
        }
    }

}

interviewQuestion('designer')('jon');*/

/*(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }
    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;

        if (ans === this.correct) {
            console.log('Correct answer!');
            sc = callback(true);
        } else {
            console.log('Wrong answer. Try again :)');
            sc = callback(false);
        }

        this.displayScore(sc);
    }
    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('------------------------------');
    }


    var q1 = new Question('Is JavaScript the coolest programming language in the world?',
        ['Yes', 'No'],
        0);
    var q2 = new Question('What is the name of this course\'s teacher?',
        ['John', 'Micheal', 'Jonas'],
        2);
    var q3 = new Question('What does best describe coding?',
        ['Boring', 'Hard', 'Fun', 'Tediuos'],
        2);

    var questions = [q1, q2, q3];

    //Closure here
    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }
    var keepScore = score();


    function nextQuestion() {
        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();
        var answer = prompt('Please select the correct answer.');
        if(answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);

            nextQuestion();
        }
    }

    nextQuestion();

})();*/

(function () {

    function Sequence(maxLimit) {
        this.maxLimit = maxLimit;
    }


    Sequence.prototype.calculate = function (fn) {
        fn(this.maxLimit);
    }

    function printPrime(value) {
        var primes = [];
        for (var i = 2; i <= value; i++) {
            primes[i] = true;
        }
        var limit = Math.sqrt(value);
        for (var i = 2; i <= limit; i++) {
            if (primes[i] === true) {
                for (var j = i * i; j < value; j += i) {
                    primes[j] = false;
                }
            }
        }
        for (var i = 2; i <= value; i++) {
            if (primes[i] === true) {
                console.log(i + " " + primes[i]);
            }
        }
    }


    function fibonacci(num) {
        var a = 1, b = 0, temp;

        while (num >= 0) {
            temp = a;
            a = a + b;
            b = temp;
            num--;
            console.log(b + " ");

        }
    }

    var fibonacciSequence = new Sequence(5000);
    fibonacciSequence.calculate(fibonacci);
    fibonacciSequence.calculate(printPrime);
})();




