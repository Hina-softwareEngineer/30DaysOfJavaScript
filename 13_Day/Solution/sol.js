//-----------level 1----------//


const names = ['Asabeneh', 'Brook', 'David', 'John']
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.table(countries);
console.table(user)
console.group("logs")
console.log(users)

console.assert(10>2*10,"10 is less than 20");
console.warn("I warn you not to learn .:xD");
console.error("Error Message");

console.time("While");
var i=0;
while(i<users.length){
    document.write(users[i]);
    i++;
}
console.timeEnd("While");

console.time("For");
for (var i=0;i<10;i++){
    document.write(users[i]);
}
console.timeEnd('For');

console.time('For of');
for (let val of users){
    document.write(val);
}
console.timeEnd("For of");

console.time("ForEach");
users.forEach(user=>document.write(user));
console.timeEnd('ForEach');