import { act, renderHook } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";


describe('Pruebas en useForm', () => {
    
    const initialForm = {
        name: 'Sebastian',
        email: 'Sebas1995@hotmail.com'
    }

    test('debe regresar un formulario por defecto ', () => {
        const {result} = renderHook(() => useForm(initialForm));
        const [ formValues, handleInputChange, reset] = result.current;
        
        expect(formValues).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    });
    
    test('debe cambiar el valor del formulario (cambiar el nombre) ', () => {
        const {result} = renderHook(() => useForm(initialForm));
        const [ , handleInputChange] = result.current;

        act( () => {
            handleInputChange({
                target:{
                    name: 'name',
                    value: 'Vane'
                }
            });
        });

        const [formValues] = result.current;
        expect(formValues).toEqual({...initialForm, name: 'Vane'})
    });
    
    test('debe de re-establecer el formulario con RESET ', () => {
        const {result} = renderHook(() => useForm(initialForm));
        const [ , handleInputChange, reset] = result.current;
        
        act( () => {
            handleInputChange({
                target:{
                    name: 'name',
                    value: 'Vane'
                }
            });
            reset();
        });

        const [formValues] = result.current;
        expect(formValues).toEqual(initialForm);
    });
    

});
