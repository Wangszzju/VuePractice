'use strict'
const name = 'World 3';
let para = document.createElement('p');
para.appendChild(document.createTextNode(`Hello ${name}！`));
document.getElementById('app').appendChild(para)
window.say = 'Kobe 1';
