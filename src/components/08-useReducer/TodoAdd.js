import React from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({handleAddTodo}) => {

    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleSummit = (e) => {
        e.preventDefault();

        if (description.trim() !== '') {
            const newTodo = {
                id: new Date().getTime(),
                desc: description,
                done: false
            }
            handleAddTodo(newTodo);
            reset();   
        }else{
            console.log('Campo vacio');
        }
    }

    return (
        <>
            <h4>Agregar TODO</h4>
            <hr/>

            <form>
                <input
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Aprender ..."
                    autoComplete="off"
                    value={description}
                    onChange={handleInputChange}
                />
                <button
                    type="submit"
                    className="btn btn-outline-primary mt-2 btn-block"
                    onClick={handleSummit}
                >
                    Agregar
                </button>
            </form> 
        </>
    )
}
