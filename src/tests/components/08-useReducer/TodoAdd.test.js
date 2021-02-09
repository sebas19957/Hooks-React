import React from 'react';
import { shallow } from "enzyme";
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd";


describe('Pruebas en <TodoAdd/>', () => {
    
    const handleAddTodo = jest.fn(); //Sirve para simular una función

    const wrapper = shallow(
        <TodoAdd
            handleAddTodo = {handleAddTodo}
        />
    );
    
    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('NO debe llamar el handlerAddTodo ', () => {
        const buttonOnClick = wrapper.find('button').prop('onClick');
        buttonOnClick({preventDefault(){}});

        expect(handleAddTodo).toHaveBeenCalledTimes(0);
    });

    test('debe de llamar la función handleAddTodo', () => {
        const value = 'Aprender React';
        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        });
        const buttonOnClick = wrapper.find('button').prop('onClick');
        buttonOnClick({preventDefault(){}});

        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false
        });

        expect(wrapper.find('input').prop('value')).toBe('');
    });
    
});
