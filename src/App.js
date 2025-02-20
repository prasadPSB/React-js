import React, { useState } from 'react';

function App() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState([]);
    const [even, setEven] = useState([]);
    const [odd, setOdd] = useState([])

    function EvenOdd(event) {
        const value = event.target.value;
        setInput(value);
    }

    function calculate() {
        if (input % 2 === 0) {
            setResult([...result, input]);
        } else {
            setResult(...odd, input);
        }
    }
        function OddEven() {
            if (input % 2 === 0) {
                setEven([...even, input]);
            } else {
                setOdd([...odd, input]);
            }
        
    }
    return (
        <div>
            <label>Enter Number :</label>
            <input type="number" value={input} onChange={EvenOdd} />
                <button onClick={calculate}>Submit</button><br />
            <div>{result}</div>
            <div>
                <button onClick={OddEven}>Calculate</button><br />
                <label>Even Numbers:</label>
                {even.map((num, index) => (
                    <div key={index}>{num}</div>
                ))}

            </div>
            <div>
                <label>Odd Numbers:</label>
                {odd.map((num, index) => (
                    <div key={index}>{num}</div>
                ))}
            </div>
        </div>
    )
}
export default App;