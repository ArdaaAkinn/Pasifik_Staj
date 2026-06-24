import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

const [array,setNums] = useState([]);

const addToArray = (num) => {setNums([...array, num]);};
const addToArraySpec = (spec) => {setNums([...array, spec])}
const deleteFromArray = () => {array.pop()};
const clearArray = () => {setNums("")};
const numArray = [];
const operatorArray = [];
const operators = ['+', '-', '*', '/'];
const result = [];

function calculation() {
  const str = array.join("");
  const expression = str.split(/([-|+|\/|*])/);

  for (let i = 0; i<expression.length; i++)
  {
    if(expression[i] === "*" | expression[i] === "/")
    {
      const leftNum = expression[i-1];
      const rightNum = expression[i+1];
      
      if(expression[i] === "*")
      {
        result = leftNum * rightNum;
      }
      else
      {
        result = leftNum / rightNum;
      }
      expression = expression.slice(rightNum)
    }
    else if (expression[i] === "-" | expression[i] === "+")
    {
      const leftNum = expression[i-1];
      const rightNum = expression[i+1];
      if(expression[i] === "-")
      {
        result = leftNum - rightNum;
      }
      else
      {
        result = leftNum + rightNum;
      }
      expression = expression.slice(rightNum)
    }
  }
}


  return (
    <div className="App">
      <header className="App-header">
        <div className = "flex flex-col mx-auto max-w-md justify-end items-end w-full h-80 bg-slate-700 rounded-t-3xl p-6">
          <ul className = "flex justify-end items-end">
            { array.isEmpty ? " ":
              array.map((item,index) => (
              <li key = {index}> {item}
            </li>
            ))}
          </ul>
          {result}
        </div>
        <div className = "flex flex-col justify-center items-center mx-auto max-w-md w-full rounded-b-3xl h-80 bg-slate-700 grid grid-cols-4 grid-rows-5 place-items-center">
          <button onClick = {() => clearArray()}  className = "flex justify-center items-center rounded-full w-12 h-12 text-bold text-white text-center text-sm bg-gray-500 outline outline-1 outline-white hover:bg-gray-300">C</button>
          <button onClick = {() => deleteFromArray()} className = "flex justify-center items-center rounded-full w-12 h-12 text-bold text-white text-center text-sm bg-gray-500 outline outline-1 outline-white hover:bg-gray-300">Del</button>
          <button className = "flex justify-center items-center rounded-full w-12 h-12 text-bold text-white text-center text-sm bg-gray-500 outline outline-1 outline-white hover:bg-gray-300">""</button>
          <button onClick = {() => addToArraySpec("/")} className = "flex justify-center items-center rounded-full w-12 h-12 text-bold text-white text-center text-sm bg-orange-500 outline outline-1 outline-white hover:bg-orange-300">/</button>
          <button onClick = {() => addToArray("7")} className = "flex justify-center items-center rounded-full w-12 h-12 text-bold text-white text-center text-sm bg-gray-700 outline outline-1 outline-white hover:bg-orange-300">7</button>
          <button onClick = {() => addToArray("8")} className = "flex justify-center items-center rounded-full w-12 h-12 text-bold text-white text-center text-sm bg-gray-700 outline outline-1 outline-white hover:bg-orange-300">8</button>
          <button onClick = {() => addToArray("9")} className = "flex justify-center items-center rounded-full w-12 h-12 text-bold text-white text-center text-sm bg-gray-700 outline outline-1 outline-white hover:bg-orange-300">9</button>
          <button onClick = {() => addToArraySpec("x")} className = "flex justify-center items-center rounded-full w-12 h-12 text-bold text-white text-center text-sm bg-orange-500 outline outline-1 outline-white hover:bg-orange-300">x</button>
          <button onClick = {() => addToArray("4")} className = "flex justify-center items-center rounded-full w-12 h-12 text-bold text-white text-center text-sm bg-gray-700 outline outline-1 outline-white hover:bg-orange-300">4</button>
          <button onClick = {() => addToArray("5")} className = "flex justify-center items-center rounded-full w-12 h-12 text-bold text-white text-center text-sm bg-gray-700 outline outline-1 outline-white hover:bg-orange-300">5</button>
          <button onClick = {() => addToArray("6")} className = "flex justify-center items-center rounded-full w-12 h-12 text-bold text-white text-center text-sm bg-gray-700 outline outline-1 outline-white hover:bg-orange-300">6</button>
          <button onClick = {() => addToArraySpec("-")} className = "flex justify-center items-center rounded-full w-12 h-12 text-bold text-white text-center text-sm bg-orange-500 outline outline-1 outline-white hover:bg-orange-300">-</button>
          <button onClick = {() => addToArray("1")} className = "flex justify-center items-center rounded-full w-12 h-12 text-bold text-white text-center text-sm bg-gray-700 outline outline-1 outline-white hover:bg-orange-300">1</button>
          <button onClick = {() => addToArray("2")} className = "flex justify-center items-center rounded-full w-12 h-12 text-bold text-white text-center text-sm bg-gray-700 outline outline-1 outline-white hover:bg-orange-300">2</button>
          <button onClick = {() => addToArray("3")} className = "flex justify-center items-center rounded-full w-12 h-12 text-bold text-white text-center text-sm bg-gray-700 outline outline-1 outline-white hover:bg-orange-300">3</button>
          <button onClick = {() => addToArraySpec("+")} className = "flex justify-center items-center rounded-full w-12 h-12 text-bold text-white text-center text-sm bg-orange-500 outline outline-1 outline-white hover:bg-orange-300">+</button>
          <button className = "flex justify-center items-center rounded-full w-12 h-12 text-bold text-white text-center text-sm bg-gray-700 outline outline-1 outline-white hover:bg-orange-300">()</button>
          <button onClick = {() => addToArray("0")} className = "flex justify-center items-center rounded-full w-12 h-12 text-bold text-white text-center text-sm bg-gray-700 outline outline-1 outline-white hover:bg-orange-300">0</button>
          <button onClick = {() => addToArray(".")} className = "flex justify-center items-center rounded-full w-12 h-12 text-bold text-white text-center text-sm bg-gray-700 outline outline-1 outline-white hover:bg-orange-300">.</button>
          <button onClick = {() => calculation()}className = "flex justify-center items-center rounded-full w-12 h-12 text-bold text-white text-center text-sm bg-orange-500 outline outline-1 outline-white hover:bg-orange-300">=</button>
        </div>
      </header>
    </div>
  );
}


export default App;


