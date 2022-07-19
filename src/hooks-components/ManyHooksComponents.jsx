import React, {useEffect, useRef, useState} from "react";

export const CounterHook = () => {


    const [count, setCounter] = useState(0);


    return (
        <div>
            <p>Static line - Counter hook </p>

            <p


            >Counter = {count}</p>


            <button onClick={() => {
                setCounter(count+1);
            }
            }>
                count
            </button>

        </div>
    );
}

export const DemoUseEffectLifeCycles =()=>{

    const [x, setX] = useState(0);
    const init1 = useRef(true);
    const init2 = useRef(true);

    //run once not excatly - https://www.techiediaries.com/react-18-useeffect/
    //But it will happen only on development. if u want to prevent it - remove the strict mode from index.js
    useEffect(()=>{
        console.log("Run once? (in dev it will run twice - see the comments");

        return(()=>{
            console.log("Unmounting the component and last effect running - once.");
        })
    },[]);

    //general running on mounting and on any change in the states.
    useEffect(()=>{

        console.log("We have change in the app - x= ", x);

        return(
            ()=>{
                console.log("finishing the last general effect, x was " , x);
            }
        )
    });

    //run everytime except the first time
    //https://stackoverflow.com/questions/53179075/with-useeffect-how-can-i-skip-applying-an-effect-upon-the-initial-render
    useEffect(()=>{

        if (init1.current){
            init1.current = false;
            return;
        }
        console.log("I won't running at the first time (Maybe won't work on dev+strict mode)");
    });

    useEffect(()=>{

        if (init1.current){
        // if (init2.current){//will make it work

                init1.current = false;
            // init2.current = false;//will make it work

            return;
        }
        console.log("2 - u need seperated function for it will be working. I won't running at the first time (Maybe won't work on dev+strict mode)");
    });


    return(
        <div>
            <h2>Here is example of useEffect run once, not run at the first render, and run each time. </h2>

            <input type="number" value={x} onChange={(ev)=>{
                setX(+ev.target.value);
            }
            }/>
        </div>
    )
}