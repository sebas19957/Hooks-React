import React, { useRef } from 'react';
import '../../components/02-useEffect/effects.css'

export const FocusScreen = () => {

    const inputRef = useRef();
    console.log(inputRef);

    const handleClick = () => {
        inputRef.current.select();
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>

            <input
                className="form-control"
                placeholder="Su nombre"
                ref={inputRef}
            />

            <button 
                className="btn btn-primary mt-3"
                onClick={handleClick}
            >
                Focus
            </button>
        </div>
    )
}
