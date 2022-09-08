import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import ContextWrapper from "./context/ContextWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <ContextWrapper>
        <App/>
    </ContextWrapper>
);
