localStorage.setItem('info','["hina","khadim","18","Pkaisan","Katachi"]')
localStorage.getItem('info')

let student={
    firstName:"Hina",
    lastName:"Khadim",
    age:18,
    country:"Pakistan",
    skills:["html5","css","javascript"],
    enrolled:['2020','2019','2018'],

}
let Info=JSON.stringify(student,undefined,4);
localStorage.setItem('student',Info);

let personAccount={
        firstName:"Hina",
        lastName:"Khadim",
        expenses:40000,
        incomes:50000,
    description:function (){
        console.log(this.firstName);
        console.log(this.lastName);
    },
    totalIncome:function(){
        return this.incomes;
    },
    totalExpense:function (){
        return (this.expenses);
    },
    accountinfo:function (){
        this.description();
        console.log(this.accountBalance());
    },
    addIncome:function (income){
        this.incomes+=income
    },
    addExpense:function (expense){
        this.expenses+=expense;
    },
    accountBalance:function(){
        return this.totalIncome()-this.Expense();
    }
}
localStorage.setItem('Account',JSON.stringify(personAccount,undefined,4));