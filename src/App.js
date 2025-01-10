import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const hello = (name) => {
    console.log('Hello ' + name);
  };

  const numbers = [1, 2, 3, 4];
  console.log('number 0: ', numbers[0]);
  console.log('number 1: ', numbers[1]);
  // const number1 = numbers[0];
  // const number2 = numbers[1];
  const [num1, num2] = numbers;
  console.log('My Number: ', num1, num2);
  // const sumAll = (...args) =>{
  //   console.log
  // }
  const myInfo = () => {
    return [10, 'John']
  };

  const result = myInfo();
  const age = result[0];
  const name = result[1];
  console.log('age: ', age);
  console.log('name: ', name);

  // const [info, setInfor] = useState();

  return (
    <>
      <h1>React APP</h1>
      <div>Hello {hello('world')}</div>
    </>
  );
}

export default App;
