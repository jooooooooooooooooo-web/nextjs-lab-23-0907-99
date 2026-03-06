"use client";
import { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);

    const numUp = (num: number): void => {
        setCount(num + count);
    }

    const numDown = (num: number): void => {
        if (count > 0) {
            setCount(count - num);
        }
    }

    const reset = (): void => {
        setCount(0);
    }

     return (
        <div className='mt-5'>
            <h3>Counter: useState</h3>
            <span>Value: { count }</span>
            <br/>
            <button style={{ marginRight: '10px' }} onClick={() => numUp(1)} type="button" className="btn btn-primary">Increment</button>
            <button style={{ marginRight: '10px' }} onClick={() => numDown(1)} type="button" className="btn btn-primary">Decrement</button>
            <button onClick={reset} type="button" className="btn btn-secondary">Reset</button>
        </div>
     );
}
