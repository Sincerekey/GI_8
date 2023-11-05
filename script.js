// Challenge: Easy
function exercise(){
    return function(todayExercise){
    console.log('Todays Exercise is: ' + todayExercise);}

};
// Test the exercise function
const mondayExercise = exercise()
mondayExercise('Running')

// Challenge: Medium
function sharePizza(people, slices){
   let total = slices / people;
    return 'Each person gets ' + total.toFixed(2) + ' slices of pizza because there are ' + people + ' people and ' + slices + ' slices.' ;
};
// Test the sharePizza function
console.log(sharePizza(8, 20));


// Challenge: Hard
function newPatient(name, age, ssn){
    const PPI = {
        name: name,
        age: age,
        ssn: ssn,
    };
    return{
        getName : function(){
            return PPI.name;
        },
        getAge : function(){
            return PPI.age
        }
    };
}
// Test the newPatient function
const patient1 = newPatient('John', 19, '654-38-8573')
console.log(patient1.getName())
console.log(patient1.getAge())

// Challenge: Very Hard
class Person{
    constructor(name, job, age){
        this.name  = name 
        this.job = job
        this.age = age
    }

    exercise(input){
        console.log(input + ' everyday is going to get me right.')
    }
    fetchJob(){
        console.log(`${this.name} works as a ${this.job}`)
    }


}

class Programmer extends Person{
    constructor(name, job, age, languages){
        super(name, job, age)

        this.languages = languages

        this.busy = true
    }
    completeTask(){
        this.busy = false
        return this.busy
        }
    acceptNewTask(){
        this.busy = true
        return this.busy
    }
    offerNewTask(){
        if(this.busy === true){
            console.log(`${this.name} is busy and cannot accept new work`)
        } else console.log(`${this.name} is avalible to take on new work`)
    }
    learnLanguage(input){
        this.languages.push(input)
    }
    listLanguages(){
        console.log(this.languages)
    }

 }

// const programmer1 = new Programmer('John', 'Developer', 25, ['JavaScript', 'Python']);
// programmer1.fetchJob();
// programmer1.exercise('Running');
// programmer1.completeTask();
// programmer1.offerNewTask();
// programmer1.learnLanguage('Java');
// programmer1.listLanguages();


// Test the Person & Programmer class
const person1 = new Person("Harold", "Backend Engineer", 20);
const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
const c2 = new Programmer("Edwin", "janitor", 55, ["HTML", "SASS”, ”Ruby"]);
const c3 = new Programmer("Manny", "SysOps", 31,[("HTML", "CSS", "JS", "R")]);
c1.learnLanguage("CSS");
c2.learnLanguage("C++");
c3.learnLanguage("JAVA");
console.log(c1.listLanguages());
console.log(c2.listLanguages());
console.log(c3.listLanguages());
console.log(person1);
console.log(c1);
console.log(c2);
console.log(c3);
person1.exercise('running');
person1.fetchJob();
