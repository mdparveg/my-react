import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const job = ['student', 'worker', 'businessman', 'kamla','nice work', 'designer']

  const friends = ['abir', 'rasel','sakib', 'parveg', 'riad']
  
  const products = [
    {name: 'Photoshop',price: '$80'},
    {name: 'Pdf Reader',price: '$40'},
    {name: 'Illustrator',price: '$100'}

  ]
  const productName = job.map(x => x);
  console.log(productName);
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter></Counter>
        <User></User>
        <ul>{
           job.map(x => <li>{x}</li>)
          }
         {
           products.map(x => <li>{x.name}. Price: {x.price}</li>)
         }
        </ul>
        <ol>{
      friends.map(x => <li>{x}</li>)
        }
      </ol>
        {
          products.map(x => <Product product={x}></Product>)
        }
        {/* <Product name={products[1].name} price={products[1].price}></Product>
        <Product name={products[2].name} price={products[2].price}></Product>
        <Again name="Rohim" job={job[0]}></Again> */}
        <Again name="Korim" job={job[2]}></Again>
        <Again name="jobbar" job={job[1]}></Again>
        <Again name="salam" job={job[3]}></Again>
      </header>
    </div>

  );
}

function Counter(){
  const [count, setCount] = useState(10);
  // const handleIncrease = () => setCount(count+1);
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count+1)}>Increase</button>
      <button onClick={() => setCount(count-1)}>Decrease</button>
    </div>
  )
}

function User() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h2>Dynamic Users: {users.length}</h2>
      <ul>
        {
          users.map(x => <li>{x.id},  {x.name}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const {name, price} = props.product;
  const productStyle = {
    border: '2px solid lightgray',
    borderRadius: '5px',
    backgroundColor: 'gray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h2>{price}</h2>
      <button>Buy now</button>
    </div>
  )
}

function Again(name){
  const css = {
    border: '2px solid red',
    margin: '10px'
  }
  return (
    <div style={css}>
      <h1>Hi im try again</h1>
  <h1>Name: {name.name}</h1>
  <h3>Job: {name.job}</h3>
    </div>
  )
}

export default App;
