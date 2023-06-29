import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
const form = document.querySelector('.new-item-form');
console.log(form.children);
//inputs
const typeInput = document.querySelector('#type');
const toFromInput = document.querySelector('#tofrom');
const detailsInput = document.querySelector('#details');
const amountInput = document.querySelector('#amount');
//list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values = [toFromInput.value, detailsInput.value, amountInput.valueAsNumber];
    let doc;
    if (typeInput.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, typeInput.value, 'end');
    form.reset();
});
// const addUID = <T extends object>(obj: T) => {
//     let uid = Math.floor(Math.random() *100);
//     return {...obj, uid};
// }
// let docOne = addUID({name:'vbb', age: 40})
// console.log(docOne)
