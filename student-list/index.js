import Controller from "./src/Controller.js";

const root = document.querySelector('#root');
console.log(root);

new Controller(root);

console.log('controller');