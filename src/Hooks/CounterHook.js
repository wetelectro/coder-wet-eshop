import { useState } from "react";

export const useCounter = (init) => {
    const [count, setCount] = useState(init);

    function increment(){
        setCount(count + 1);
    }
    function decrement(){
        setCount(count - 1);
    }
    function reset(){
        setCount(0);
    }

    return([
        count,
        increment,
        decrement,
        reset,
        setCount
    ])
}