import './App.css';
import { useState } from 'react';

function App() {

const [array,setNums] = useState(["0"]);

const addToArray = (num) => {
  if(array.length === 1 && array.at(0) === "0"){
    setNums([num]);
  } else{
    setNums([...array, num]);};
  } 

const [result,setResult] = useState([]);
const last = array.at(-1);

function calculation() {
  const str = array.join("");
  let exp = (str.split(/([-+/*()])/));
  let res = [];

  for (let i = 0; i<exp.length; i++){
    if(exp[i] === "*" || exp[i] === "/"){
      const leftNum = Number(exp[i-1]);
      const rightNum = Number(exp[i+1]);
      
      if(exp[i] === "*"){
        res = (leftNum * rightNum);
      } else{
      res = (leftNum / rightNum);
      }
      if(exp.slice(0,i-1).length === 0){
        exp = ([res , ...exp.slice(i+2)])
      } else{
        exp = ([...exp.slice(0, i-1) , res, ...exp.slice(i+2)]);
      }
      i = 0;
    }
  }
  for (let i = 0; i<exp.length; i++){
    if (exp[i] === "-" || exp[i] === "+"){
      const leftNum = Number(exp[i-1]);
      const rightNum = Number(exp[i+1]);
      if(exp[i] === "-"){
        res = (leftNum - rightNum);
      } else{
        res = (leftNum + rightNum);
      }
      if(exp.slice(0,i-1).length === 0){
        exp = ([res , ...exp.slice(i+2)])
      } else{
        exp= ([...exp.slice(0, i-1) , res, ...exp.slice(i+2)]);
      }
      i = 0;
    }
  }
  setResult([res]);
}


  return (
    <div className="App">
      <header className="App-header">
        <div className="bg-slate-700 max-w-md w-full rounded-t-3xl p-2 grid grid-cols-3">
          <div className="flex gap-3 mt-4 ml-4">
          <button className="rounded-full h-6 w-6 bg-red-700 hover:bg-red-400"></button>
          <button className="rounded-full h-6 w-6 bg-yellow-300 hover:bg-yellow-100"></button>
          <button className="rounded-full h-6 w-6 bg-gray-500 hover:bg-gray-300"></button>
          </div> 
          <div className="flex mt-2 ml-4">
            <button className="rounded-3xl h-10 w-14 bg-gray-800 outline outline-1 outline-gray hover:bg-gray-700"> * </button>
          </div> 
          <div className="flex justify-end mt-2 mr-4">
            <button className="rounded-3xl h-10 w-14 bg-gray-800 outline outline-1 outline-gray hover:bg-gray-700"> * </button>
          </div> 
        </div>
        <div className="flex flex-col mx-auto max-w-md justify-end items-end w-full h-80 bg-slate-700 p-6">
          <ul className="flex justify-end items-end">
            { array.length === 0 ? " ":
              array.map((item,index) => (
              <li key = {index}> {item}
            </li>
            ))}
          </ul>
          {result}
        </div>
        <div className="flex flex-col justify-center items-center mx-auto max-w-md w-full rounded-b-3xl h-80 bg-slate-700 grid grid-cols-4 grid-rows-5 place-items-center">
          <button onClick = {() => {setNums(array.slice(0, -1)); setResult([]); if(array.length === 1)setNums(["0"])}} className="flex justify-center items-center rounded-full w-14 h-14 text-bold text-white text-center text-md bg-gray-500 outline outline-1 outline-silver-600 hover:bg-gray-300">Dl</button>
          <button onClick = {() => {setNums(["0"]); setResult([]);}}  className="flex justify-center items-center rounded-full w-14 h-14 text-bold text-white text-center text-md bg-gray-500 outline outline-1 outline-white hover:bg-gray-300">C</button>
          <button onClick = {() => {if(array.length !== 0 && !["/", "-", "+", "*", "."].includes(last)){addToArray(".")}; setResult([]);}} className="flex justify-center items-center rounded-full w-14 h-14 text-bold text-white text-center text-md bg-gray-500 outline outline-1 outline-gray-300 hover:bg-gray-300">.</button>
          <button onClick = {() => {if(array.length !== 0 && !["/", "-", "+", "*", "."].includes(last)){addToArray("/")}; setResult([]);}} className="flex justify-center items-center rounded-full w-14 h-14 text-bold text-white text-center text-md bg-orange-500 outline outline-1 outline-orange-300 hover:bg-orange-300">/</button>
          <button onClick = {() => {addToArray("7"); setResult([]);}} className="flex justify-center items-center rounded-full w-14 h-14 text-bold text-white text-center text-md bg-gray-700 outline outline-1 outline-gray-500 hover:bg-orange-300">7</button>
          <button onClick = {() => {addToArray("8"); setResult([]);}} className="flex justify-center items-center rounded-full w-14 h-14 text-bold text-white text-center text-md bg-gray-700 outline outline-1 outline-gray-500 hover:bg-orange-300">8</button>
          <button onClick = {() => {addToArray("9"); setResult([]);}} className="flex justify-center items-center rounded-full w-14 h-14 text-bold text-white text-center text-md bg-gray-700 outline outline-1 outline-gray-500 hover:bg-orange-300">9</button>
          <button onClick = {() => {if(array.length !== 0 && !["/", "-", "+", "*", "."].includes(last)){addToArray("*")}; setResult([]);}} className="flex justify-center items-center rounded-full w-14 h-14 text-bold text-white text-center text-md bg-orange-500 outline outline-1 outline-orange-300 hover:bg-orange-300">x</button>
          <button onClick = {() => {addToArray("4"); setResult([]);}} className="flex justify-center items-center rounded-full w-14 h-14 text-bold text-white text-center text-md bg-gray-700 outline outline-1 outline-gray-500 hover:bg-orange-300">4</button>
          <button onClick = {() => {addToArray("5"); setResult([]);}} className="flex justify-center items-center rounded-full w-14 h-14 text-bold text-white text-center text-md bg-gray-700 outline outline-1 outline-gray-500 hover:bg-orange-300">5</button>
          <button onClick = {() => {addToArray("6"); setResult([]);}} className="flex justify-center items-center rounded-full w-14 h-14 text-bold text-white text-center text-md bg-gray-700 outline outline-1 outline-gray-500 hover:bg-orange-300">6</button>
          <button onClick = {() => {if(array.length !== 0 && !["/", "-", "+", "*", "."].includes(last)){addToArray("-")}; setResult([]);}} className="flex justify-center items-center rounded-full w-14 h-14 text-bold text-white text-center text-md bg-orange-500 outline outline-1 outline-orange-300 hover:bg-orange-300">-</button>
          <button onClick = {() => {addToArray("1"); setResult([]);}} className="flex justify-center items-center rounded-full w-14 h-14 text-bold text-white text-center text-md bg-gray-700 outline outline-1 outline-gray-500 hover:bg-orange-300">1</button>
          <button onClick = {() => {addToArray("2"); setResult([]);}} className="flex justify-center items-center rounded-full w-14 h-14 text-bold text-white text-center text-md bg-gray-700 outline outline-1 outline-gray-500 hover:bg-orange-300">2</button>
          <button onClick = {() => {addToArray("3"); setResult([]);}} className="flex justify-center items-center rounded-full w-14 h-14 text-bold text-white text-center text-md bg-gray-700 outline outline-1 outline-gray-500 hover:bg-orange-300">3</button>
          <button onClick = {() => {if(array.length !== 0 && !["/", "-", "+", "*", "."].includes(last)){addToArray("+")}; setResult([]);}} className="flex justify-center items-center rounded-full w-14 h-14 text-bold text-white text-center text-md bg-orange-500 outline outline-1 outline-orange-300 hover:bg-orange-300">+</button>
          <div></div>
          <button onClick = {() => {addToArray("0"); setResult([]);}} className="flex justify-center items-center rounded-full w-14 h-14 text-bold text-white text-center text-md bg-gray-700 outline outline-1 outline-gray-500 hover:bg-orange-300">0</button>
          <div></div>
          <button onClick = {() => {if(array.length !== 0 && !["/", "-", "+", "*", "."].includes(last)){calculation()}; setNums([]);}}className="flex justify-center items-center rounded-full w-14 h-14 text-bold text-white text-center text-md bg-orange-500 outline outline-1 outline-orange-300 hover:bg-orange-300">=</button>
        </div>
      </header>
    </div>
  );
}
export default App;
