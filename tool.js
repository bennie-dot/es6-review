

//class
export class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, i'm ${this.name}, and i'm ${this.age} years old.`);
    }
}

// Asynchronous programming also known as await.
 export async function fetchData(){
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve('Data fetched!');
        }, 2000);
    })
 }

 //promises 
 export function delayMessage(message,delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);
                }, delay);
    })
 }

 //maps
 export function createMapExample() {
    const map = new Map();

map.set('name','Neetah');
map.set('age',30);
map.set(true,'boolean key');

return map;
 }