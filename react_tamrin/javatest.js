// import name,{Lname as lastname,age} from './java.js';
// console.log(`hi pooli ${name}`);
// console.log(`lastname is ${lastname} and age is ${age}`);

// const div = document.createElement('div');
// div.setAttribute('id','ali');
// div.textContent = 'fuck you bakhshi';
// document.body.append(div)

const text = 10;
const root = document.getElementById('root');    
const span1 = React.createElement('span',{},'hello bitch');
const span2 = React.createElement('span',{},'amir')
const test = React.createElement('div',{id:'ali'},span1,span2);
const div = <div id = 'test'>{text>=10  && 'ok'}</div>
ReactDOM.render(div,root)