// import React from "react";//Not needed in hooks

import {Link} from "react-router-dom";
import React from "react";

export function MainHooksComponent(){//mainHooksComponent - won't work

    return(
        <div>
            <Link to="/">return</Link>

            <h1>Main Hooks Component</h1>
        </div>
    );
}