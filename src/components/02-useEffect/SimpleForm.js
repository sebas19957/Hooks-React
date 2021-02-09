import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

    // Los hooks no se puede llamar de manera condicionar (dentro de un if, for, while .etc)
    // estos se ejecutan en orden -> para tener en cuenta
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const {name, email} = formState;

    // los [] se utiliza cuando se quiere ejecutar solo cuando el componente carga (se ejecuta una vez)
    useEffect( () => {
        console.log('hey!');
    },[]);

    // Se utlitiza cuando el formState cambia
    useEffect( () => {
        // console.log('el formState cambio');
    },[formState]);

    // Se utiliza cuando el email cambia
    useEffect( () => {
        // console.log('el email cambio');
    },[email]);

    const handleInputChange = ({target}) => {
       
        setFormState({
            // ...(formState) se utiliza para que los demas valores no cambien o se mantengan como esten
            ...formState,
            [target.name]: target.value
        });
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr/>

            <div className ="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={ handleInputChange}
                />
            </div>

            <div className ="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value={email}
                    onChange={ handleInputChange}
                />
            </div>

            { (name === '123') && <Message/>}
        </>
    )
}
