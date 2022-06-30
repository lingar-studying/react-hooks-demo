import React from "react";
import {Counter} from "./ManyClassComponents";
import {Link} from "react-router-dom";

export class MainClassComponent extends React.Component{

    render(){
        return(
            <div>
                <Link to="/">return</Link>

                <h1>Main Class Components</h1>
                <Counter/>


            </div>
        )
    }

}