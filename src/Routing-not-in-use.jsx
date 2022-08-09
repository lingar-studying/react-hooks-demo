import React from "react";
import {Route, Router, Routes} from "react-router";
import App from "./App";
import {MainClassComponent} from "./class-components/MainClassComponent";
import {MainHooksComponent} from "./hooks-components/MainHooksComponent";
import {BrowserRouter} from "react-router-dom";
import {MainDraft} from "./draft-area/MainDraft";

export class AppMainRouting extends React.Component {


    render() {
        return (
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<App />}>
                            <Route path="classes" element={<MainClassComponent />} />
                            <Route path="hooks" element={<MainHooksComponent />} />
                            <Route path="drafts" element={<MainDraft />} />

                        </Route>
                    </Routes>
                </BrowserRouter>
            </>
        )
    }
}

//Problem if I doing http://localhost:3000/classes it's working but bit in http://localhost:3000/
//getting this: Uncaught Error: You cannot render a <Router> inside another <Router>. You should never have more than one in your app.