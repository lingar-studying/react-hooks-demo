import React from "react";
import {Counter} from "./ManyClassComponents";

export class MainClassComponent extends React.Component{

    render(){
        return(
            <div>
                <h1>Main Class Components</h1>
                <Counter/>


            </div>
        )
    }

}