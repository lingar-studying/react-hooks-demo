import React from "react";
import {Route, Routes} from "react-router";
import App from "./App";
import {MainClassComponent} from "./class-components/MainClassComponent";
import {MainHooksComponent} from "./hooks-components/MainHooksComponent";

export class AppMainRouting extends React.Component {


    render() {
        return (
                <Routes>
                    <Route path="/" element={<App/>}/>
                    <Route path="classes" element={<MainClassComponent/>}/>
                    <Route path="hooks" element={<MainHooksComponent/>}/>
                </Routes>
        )
    }
}