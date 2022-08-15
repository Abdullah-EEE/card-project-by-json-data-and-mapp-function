import React from 'react';
// import './App.css';
import Card from './Components/Card.js';
import Card2 from './Components/Card2.js';
import Data from './data.json'

const title='To do app';


function App(){
  let items=[];
  // for(let y=0; y<Data.length; y++){
  //   items.push(<Card titleText={Data[y].title} descText={Data[y].desc}/>)
  // }
     items=Data.map((x)=> {return <Card titleText={x.title} descText={x.desc}/>})
  
    return  <div>
              <h1 className="headingstyle">{title}</h1>
              {items}
              
               {/* forloop use
              <Card titleText={Data[y].title} descText={Data[y].desc}/> */}

              <Card titleText="call father" descText="Abdullah" />
              <Card2 />

          </div>

}

export default App;
