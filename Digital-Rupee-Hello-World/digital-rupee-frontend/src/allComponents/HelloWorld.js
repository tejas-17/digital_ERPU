import React from 'react'
import { useState } from 'react';
import axios from 'axios';

export default function HelloWorld() {

    const [response, setResponse] = useState('');

    const handleClick = async () => {
        try {
            const apiUrl = 'http://localhost:4000/backendApi/helloWorld';
            const response = await axios.get(apiUrl);
            setResponse(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
            setResponse('Error fetching data from the API.');
        }
    };

    return (
        <div>
            <div>{response}</div>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}
