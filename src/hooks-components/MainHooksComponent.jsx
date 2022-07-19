// import React from "react";//Not needed in hooks

import {Link} from "react-router-dom";
import React, {useEffect} from "react";
import {CounterHook, DemoUseEffectLifeCycles} from "./ManyHooksComponents";

export function MainHooksComponent(){//mainHooksComponent - won't work

    useEffect(()=>{
        document.title = "Main Hooks Component";
    },[]);
    return(
        <div>
            <Link to="/">return</Link>

            <h1>Main Hooks Component</h1>

            <CounterHook/>
            <DemoUseEffectLifeCycles/>
        </div>
    );
}