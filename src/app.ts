import {Invoice} from "./classes/Invoice.js"
import { ListTemplate } from "./classes/ListTemplate.js";
import {Payment} from "./classes/Payment.js"
import {HasFormatter} from './interfaces/HasFormatter.js'

const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

//inputs
const typeInput = document.querySelector('#type') as HTMLSelectElement;
const toFromInput = document.querySelector('#tofrom') as HTMLInputElement;
const detailsInput = document.querySelector('#details') as HTMLInputElement;
const amountInput = document.querySelector('#amount') as HTMLInputElement;

//list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e:Event) => {
    e.preventDefault();
    let values: [string, string, number] = [toFromInput.value, detailsInput.value, amountInput.valueAsNumber]

    let doc: HasFormatter;
    if(typeInput.value === 'invoice'){
        doc = new Invoice(...values);
    }else{
        doc = new Payment(...values);
    }
    list.render(doc, typeInput.value, 'end');
    form.reset();
})

// const addUID = <T extends object>(obj: T) => {
//     let uid = Math.floor(Math.random() *100);
//     return {...obj, uid};
// }

// let docOne = addUID({name:'vbb', age: 40})
// console.log(docOne)



