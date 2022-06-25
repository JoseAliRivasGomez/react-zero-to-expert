import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from "./FirstApp";
import { CounterApp } from './CounterApp';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <FirstApp title="Breaking Bad" subtitle={123}/> */}
        <CounterApp value={123}/>
    </React.StrictMode>
)