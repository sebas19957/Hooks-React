import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../05-useLayoutEffect/layout.css';

export const Layout = () => {

    const {counter, increment} = useCounter(1);
    const [boxSize, setBoxSize] = useState({});

    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {quote} = !!data && data[0];

    const pTag = useRef();

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    },[quote] )

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr/>
                    
            <blockquote className="blockquote text-rigght">
                <p 
                    ref={pTag}
                    className="mb-0"
                >
                    {quote}
                </p>
            </blockquote>

            <pre>{ JSON.stringify(boxSize, null, 3)}</pre>
               
            <button 
                className="btn btn-primary"
                onClick={increment}>
                Siguiente frase
            </button>
                  
                   

        </div>
    )
}
