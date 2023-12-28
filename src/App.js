import { useEffect, useState } from 'react';
import './index.css';

function App() {
    
 const [fact, setFact] = useState("");

 useEffect(() => {
  async function getFact(){
    let request = await fetch("https://api.kanye.rest");
    let response = await request.json();
  
     setFact(response.quote);
   }

   setInterval(getFact,1000);
   
 }, [])
 
  return (
    <div className="App">
      <h1>{fact}</h1>
    </div>
  );
}

export default App;

