import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const container = document.getElementById('root') as HTMLElement | null;
const root = container ? ReactDOM.createRoot(container) : null;

if (root) {
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
} else {
    console.error("Root element not found. Make sure there is a div with id='root' in your HTML.");
}