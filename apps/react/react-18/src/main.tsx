import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    // <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    // </React.StrictMode>
);

// render(
//     <React.StrictMode>
//         <BrowserRouter>
//             <App />
//         </BrowserRouter>
//     </React.StrictMode>,
//     document.getElementById('root')!
// );