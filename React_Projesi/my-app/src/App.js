import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

const [array,setNums] = useState([]);

const addToArray = (num) => {setNums([...array, num]);};
const addToArraySpec = (spec) => {setNums([...array, spec])};
const deleteFromArray = () => {setNums(array.slice(0, -1))};
const clearArray = () => {setNums([])};
const numArray = [];
const operatorArray = [];
const operators = ['+', '-', '*', '/'];
const [result,setResult] = useState([]);
const [expression, setExp] = useState([]);

function calculation() {
  const str = array.join("");
  setExp(str.split(/([-|+|\/|*])/));

  for (let i = 1; i<expression.length; i++)
  {
    if(expression[i] === "*" || expression[i] === "/")
    {
      const leftNum = Number(expression[i-1]);
      const rightNum = Number(expression[i+1]);
      
      if(expression[i] === "*")
      {
        setResult(leftNum * rightNum);
      }
      else
      {
        setResult(leftNum / rightNum);
      }

      if(expression.slice(0,leftNum) === [])
      {
        setExp([result , expression.slice(rightNum+1)])
      }
      else
      {
        setExp([expression.slice(0, leftNum) , result, expression.slice(rightNum+1)]);
      }
      
    }
    else if (expression[i] === "-" || expression[i] === "+")
    {
      const leftNum = Number(expression[i-1]);
      const rightNum = Number(expression[i+1]);
      if(expression[i] === "-")
      {
        setResult(leftNum - rightNum);
      }
      else
      {
        setResult(leftNum + rightNum);
      }
      if(expression.slice(0,leftNum) === [])
      {
        setExp([result , expression.slice(rightNum+1)])
      }
      else
      {
        setExp([expression.slice(0, leftNum) , result, expression.slice(rightNum+1)]);
      }
    }
  }
}


  return (
    <div className="App">
      <header className="App-header">
        <div className = "flex flex-col mx-auto max-w-md justify-end items-end w-full h-80 bg-slate-700 rounded-t-3xl p-6">
          <ul className = "flex justify-end items-end">
            { array.length === 0 ? " ":
              array.map((item,index) => (
              <li key = {index}> {item}
            </li>
            ))}
          </ul>
          {result}
        </div>
        <div className = "flex flex-col justify-center items-center mx-auto max-w-md w-full rounded-b-3xl h-80 bg-slate-700 grid grid-cols-4 grid-rows-5 place-items-center">
          <button onClick = {() => {clearArray(); setResult([]); setExp([]);}}  className = "flex justify-center items-center rounded-full w-12 h-12 text-bold text-white text-center text-sm bg-gray-500 outline outline-1 outline-white hover:bg-gray-300">C</button>
          <button onClick = {() => {deleteFromArray(); setResult([]);}} className = "flex justify-center items-center rounded-full w-12 h-12 text-bold text-white text-center text-sm bg-gray-500 outline outline-1 outline-white hover:bg-gray-300">Del</button>
          <button className = "flex justify-center items-center rounded-full w-12 h-12 text-bold text-white text-center text-sm bg-gray-500 outline outline-1 outline-white hover:bg-gray-300">""</button>
          <button onClick = {() => addToArraySpec("/")} className = "flex justify-center items-center rounded-full w-12 h-12 text-bold text-white text-center text-sm bg-orange-500 outline outline-1 outline-white hover:bg-orange-300">/</button>
          <button onClick = {() => {addToArray("7"); setResult([]);}} className = "flex justify-center items-center rounded-full w-12 h-12 text-bold text-white text-center text-sm bg-gray-700 outline outline-1 outline-white hover:bg-orange-300">7</button>
          <button onClick = {() => {addToArray("8"); setResult([]);}} className = "flex justify-center items-center rounded-full w-12 h-12 text-bold text-white text-center text-sm bg-gray-700 outline outline-1 outline-white hover:bg-orange-300">8</button>
          <button onClick = {() => {addToArray("9"); setResult([]);}}className = "flex justify-center items-center rounded-full w-12 h-12 text-bold text-white text-center text-sm bg-gray-700 outline outline-1 outline-white hover:bg-orange-300">9</button>
          <button onClick = {() => {addToArraySpec("*"); setResult([]);}} className = "flex justify-center items-center rounded-full w-12 h-12 text-bold text-white text-center text-sm bg-orange-500 outline outline-1 outline-white hover:bg-orange-300">x</button>
          <button onClick = {() => {addToArray("4"); setResult([]);}} className = "flex justify-center items-center rounded-full w-12 h-12 text-bold text-white text-center text-sm bg-gray-700 outline outline-1 outline-white hover:bg-orange-300">4</button>
          <button onClick = {() => {addToArray("5"); setResult([]);}} className = "flex justify-center items-center rounded-full w-12 h-12 text-bold text-white text-center text-sm bg-gray-700 outline outline-1 outline-white hover:bg-orange-300">5</button>
          <button onClick = {() => {addToArray("6"); setResult([]);}} className = "flex justify-center items-center rounded-full w-12 h-12 text-bold text-white text-center text-sm bg-gray-700 outline outline-1 outline-white hover:bg-orange-300">6</button>
          <button onClick = {() => {addToArraySpec("-"); setResult([]);}} className = "flex justify-center items-center rounded-full w-12 h-12 text-bold text-white text-center text-sm bg-orange-500 outline outline-1 outline-white hover:bg-orange-300">-</button>
          <button onClick = {() => {addToArray("1"); setResult([]);}} className = "flex justify-center items-center rounded-full w-12 h-12 text-bold text-white text-center text-sm bg-gray-700 outline outline-1 outline-white hover:bg-orange-300">1</button>
          <button onClick = {() => {addToArray("2"); setResult([]);}} className = "flex justify-center items-center rounded-full w-12 h-12 text-bold text-white text-center text-sm bg-gray-700 outline outline-1 outline-white hover:bg-orange-300">2</button>
          <button onClick = {() => {addToArray("3"); setResult([]);}} className = "flex justify-center items-center rounded-full w-12 h-12 text-bold text-white text-center text-sm bg-gray-700 outline outline-1 outline-white hover:bg-orange-300">3</button>
          <button onClick = {() => {addToArraySpec("+"); setResult([]);}} className = "flex justify-center items-center rounded-full w-12 h-12 text-bold text-white text-center text-sm bg-orange-500 outline outline-1 outline-white hover:bg-orange-300">+</button>
          <button className = "flex justify-center items-center rounded-full w-12 h-12 text-bold text-white text-center text-sm bg-gray-700 outline outline-1 outline-white hover:bg-orange-300">()</button>
          <button onClick = {() => {addToArray("0"); setResult([]);}} className = "flex justify-center items-center rounded-full w-12 h-12 text-bold text-white text-center text-sm bg-gray-700 outline outline-1 outline-white hover:bg-orange-300">0</button>
          <button onClick = {() => {addToArray("."); setResult([]);}} className = "flex justify-center items-center rounded-full w-12 h-12 text-bold text-white text-center text-sm bg-gray-700 outline outline-1 outline-white hover:bg-orange-300">.</button>
          <button onClick = {() => {calculation();}}className = "flex justify-center items-center rounded-full w-12 h-12 text-bold text-white text-center text-sm bg-orange-500 outline outline-1 outline-white hover:bg-orange-300">=</button>
        </div>
      </header>
    </div>
  );
}


export default App;


