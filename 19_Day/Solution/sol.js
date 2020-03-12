function outer(){
    let string="Hina"
    function inner(){
        return string+" Khadim"
    }
    return inner;
}

outerFunction()()
// or 
const inner1=outer()
console.log(inner1())

function outerFunction(){
    let count=0;

    function plusOne(){
        return count+=1;
    }
    function minusOne(){
        return count-=1;
    }
    function reset(){return count=0;}

    return {
        plusOne,
        minusOne,
        reset,
    }
}

outerFunction().plusOne()
outerFunction().minusOne()
outerFunction().reset()

function personAccount(){
    let firstName="Hina",
        lastName="Khadim",
        incomes=40000,
        expenses=20000;

        function totalIncome(){
            return incomes;
        }
        function totalExpense(){
            return expenses;
        }
        function accountInfo(){
            return {
                firstName,lastName,totalIncome,
                totalExpense,accountBalance
            }
        }
        function addIncome(i){
            incomes=incomes+i;
            return incomes;
        }
        function addExpense(e){
            expenses=expenses+e;
            return expenses;
        }
        function accountBalance(){
            return totalIncome();
        }
}
