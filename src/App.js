import React, { useState } from 'react';

function App() {
    const [greet, setGreet] = useState('Hello World');
    const changeGreet = () => 
        {setGreet('Hello Prasad');}
    return (
        <div>
            <button onClick={changeGreet}>Change the Greet Message</button>
            <h1>{greet}</h1>
        </div>
    );
}

export default App;