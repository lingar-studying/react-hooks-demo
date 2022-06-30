import logo from './logo.svg';
import './App.css';
import React from "react";
import {BrowserRouter, Link} from "react-router-dom";
import {AppMainRouting} from "./Routing";

//https://reactjs.org/docs/hooks-intro.html
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>

            <main>
                <h1>React App.js</h1>

                <h3><Link to="/classes">Classes</Link> </h3>
                <h3><Link to="/hooks">Hooks</Link></h3>
                {/*<MainClassComponent/>*/}
                {/*<MainHooksComponent/>*/}
            </main>
        </div>
    );
}

export default App;
