
//class
import { Person,/* other imports if any */} from './tool.js'
const cleo = new Person('cleo',25);
cleo.greet();

//Aynchronous programming/await
import {fetchData} from './tool.js';
async function displayData() {
    const result = await fetchData();
    console.log(result);
}

displayData();

//promises
import { delayMessage } from './tool.js';
delayMessage('Hello after 2 seconds',
    2000).then(console.log);

//maps
import { createMapExample } from './tool.js';
 const myMap = createMapExample();
 for(let[key, value] of myMap) {
    console.log(`${key}: ${value}`);
 }