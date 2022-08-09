import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App";
import {MainClassComponent} from "./class-components/MainClassComponent";
import {MainHooksComponent} from "./hooks-components/MainHooksComponent";
import {MainDraft} from "./draft-area/MainDraft";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //If you want to effect won't be called twice when mounting a component - remove the strict mode..
    // <React.StrictMode>
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>}>
                        <Route path="classes" element={<MainClassComponent/>}/>
                        <Route path="hooks" element={<MainHooksComponent/>}/>
                        <Route path="drafts" element={<MainDraft />} />

                    </Route>
                </Routes>
            </BrowserRouter>
        </>
     // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
