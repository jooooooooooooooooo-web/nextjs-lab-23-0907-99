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
        <div className='mt-5' style={{ margin: '20px 0', textAlign: 'center' }}>
            <h1 style={{ fontSize: '24px' }}>Press the Button</h1>
            <br/>
            <button style={{ marginRight: '10px', border: '2px double', padding: '10px', backgroundColor: 'green', color: 'white' }} onClick={() => numUp(1)} type="button" className="btn btn-primary">Increment</button>
            <button style={{ marginRight: '10px', border: '2px double', padding: '10px', backgroundColor: 'red', color: 'white' }} onClick={() => numDown(1)} type="button" className="btn btn-primary">Decrement</button>
            <button style={{ border: '2px double', padding: '10px',backgroundColor: 'gray', color: 'white' }} onClick={reset} type="button" className="btn btn-secondary">Reset</button>
            <br/>
            <h2 style={{ margin: '10px 0', fontSize: '24px' }}>Value: { count }</h2>
        </div>
     );
}