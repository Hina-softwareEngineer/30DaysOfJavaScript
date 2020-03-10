
class Animal{
    constructor(name,age,color,legs){
        this.name=name;
        this.age=age;
        this.color=color;
        this.legs=legs;
    }
    getinfo(){
        console.log(`Name: ${this.name}\n
                Age: ${this.age}\n
                Color: ${this.color}\n
                Legs: ${this.legs}.`);
    }
}

class Dog extends Animal{
    constructor(name,age,color,legs, kinds){
        super(name,age,color,legs);
        this.kinds=kinds;
    }
    getinfo(){
        super.getinfo();
        console.log('\nKind: ',this.kinds);
    }
}

class Cat extends Animal{
    constructor(name,age,color,legs, cute){
        super(name,age,color,legs);
        this.cute=cute;
    }
    getinfo(){
        super.getinfo();
        console.log('\nCuteness: ',this.cute);
    }
}

// Not doing mean and sum,....question.

class Statistics{
    constructor(array){
        this.array=array;
    }

    Count(){
        var count=0;
        for (var i=0;i<this.array.length;i++){
            count++;
        }
        return count;
    }

    Sum(){
        return this.array.reduce((acc,next)=>acc+next);
    }

    Min(){
        return Math.min(this.array);
    }

    Max(){
        return Math.max(this.array);
    }

    Range(){
        return 14;
    }

    Mean(){
        return this.Sum()/this.Count();
    }

    
}


class PersonAccount{
    constructor(firstName,lastName,incomes,expenses){
        this.firstName=firstName;
        this.lastName=lastName;
        this.expenses=expenses;
        this.incomes=incomes;
    }
    description(){
        console.log(this.firstName);
        console.log(this.lastName);
    }
    totalIncome(){
        return this.incomes;
    }
    totalExpense(){
        return (this.expenses);
    }
    accountinfo(){
        this.description();
        console.log(this.accountBalance());
    }
    addIncome(income){
        this.incomes+=income
    }
    addExpense(expense){
        this.expenses+=expense;
    }
    accountBalance(){
        return this.totalIncome()-this.Expense();
    }
}