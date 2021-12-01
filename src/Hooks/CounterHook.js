import { useState } from "react";

export const useCounter = (init, stock) => {
    const [count, setCount] = useState(init);

    function increment(){
        if(count < stock){
            setCount(count + 1);
        }
    }
    function decrement(){
        if(count > 1){
            setCount(count - 1);
        }
    }
    function reset(){
        setCount(1);
    }

    return([
        count,
        increment,
        decrement,
        reset,
        setCount
    ])
}