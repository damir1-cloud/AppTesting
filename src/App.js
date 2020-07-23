import React, { useState, useEffect } from 'react';
   
import './App.css';


function App() {

  let data = {title: "waiting for data"};
const [isfetch, setfetch] = useState(false);
const [state, setstate] = useState(data);
const se = false;

useEffect( ()=> {

    
   const fetchData = async ()=> {

     setfetch(true);
     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

     const data2 = await response.json();
     setstate(data2);
    setfetch(false);

   } 
    
   fetchData();

}, [se]);

if(isfetch){
  return (<div>Data is loading.......</div>);
}

  return (
    
    <div>
      Title is {state.title}
    </div>


  );
}

export default App;
