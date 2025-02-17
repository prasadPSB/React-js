import React, { useState } from 'react';

function App(){
    const [number, setNumber]=useState("");
    const [factorial, setFactorial] = useState("");

    function calculateFactorial() {
        let fact = 1;
        for(let i=1;i<=number;i++){
            fact*=i
        }
        setFactorial(fact)
    };
 
    return(
        <>
            <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}}/>
            <button onClick={calculateFactorial}>Submit</button>
            {factorial !== "" && <p>Factorial: {factorial}</p>}
        </>
    );
}
export default App;