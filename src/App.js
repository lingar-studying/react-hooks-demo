import logo from './logo.svg';
import './App.css';
// import './try.css';
import React from "react";
import {Link} from "react-router-dom";
import {Outlet} from "react-router";

//https://reactjs.org/docs/hooks-intro.html
//Routing - react-router 6 - https://reactrouter.com/docs/en/v6/getting-started/tutorial
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
                {/*<AppMainRouting/>*/}
                {/*According to that, it supposed to work https://reactrouter.com/docs/en/v6/getting-started/tutorial#nested-routes*/}

                <h1>React App.js</h1>
                {/*TODO - make the routing from here not on all page. */}
                <h3><Link to="/">Home</Link></h3>

                <h3><Link to="/classes">Classes</Link></h3>
                <h3><Link to="/hooks">Hooks</Link></h3>
                <h3><Link to="/drafts">Drafts</Link></h3>

                <Outlet/>

                {/*<MainClassComponent/>*/}
                {/*<MainHooksComponent/>*/}
            </main>
        </div>
    );
}

export default App;
/*
TODO :

- Let's insert some MUI.
- Do the examples closed and that you can click and then it will be opening
-

 */