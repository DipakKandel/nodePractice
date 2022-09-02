/* //this was first program
const amount = 1
if (amount>10){

    console.log(`${amount } is double digit`)
}
else if(10>amount>0){
    console.log('single digit')
}
console.log('This is my first node js program')
*/

//this is second program
console.log(__dirname)
console.log(__filename)
// console.log(process)

// setInterval(test,1000)

// function test(){
//     console.log(
//         "this is test"
//     )
// }

// setInterval(()=>console.log('hello bro'),1000)

 

 const operatingSystem =  require ('os');
//  console.log(operatingSystem)
console.log(operatingSystem.userInfo())

systemUptime = operatingSystem.uptime()/60/60;
console.log(systemUptime + "hours") 

const path = require ('path')
console.log(path.sep);

const filepath = path.join('ptha','xyz.js');
console.log(filepath)



const ldsh = require('lodash')

const items = [1,[2,[3,[4]]]]

const newItems =ldsh.flattenDeep(items)

console.log(newItems); 