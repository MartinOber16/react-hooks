import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from "../../hooks/useForm";

describe('Pruebas en useForm', () => {
    
    const initialForm = {
        name: 'Martin',
        email: 'martin@mail.com',
    };

    test('Debe regresar un formulario por defecto', () => {

        const { result } = renderHook( () => useForm( initialForm ) );
        const [ formValues, handleInputChange, reset ] = result.current;

        expect( formValues ).toBe( initialForm );
        expect( typeof handleInputChange ).toBe( 'function' );
        expect( typeof reset ).toBe( 'function' );

    });

    test('Debe cambiar el valor del formulario (cambiar name)', () => {

        const { result } = renderHook( () => useForm( initialForm ) );
        const [ , handleInputChange ] = result.current;

        act( () => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'MartinCho'
                }
            });
        });

        const [ formValues ] = result.current;
        expect( formValues ).toEqual( { ...initialForm, name: 'MartinCho' } );


    });

    test('Debe reestablecer el formulario con RESET', () => {
        
        const { result } = renderHook( () => useForm( initialForm ) );
        const [ , handleInputChange, reset ] = result.current;

        act( () => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'MartinCho'
                }
            });

            reset();
        });

        const [ formValues ] = result.current;
        expect( formValues ).toEqual( initialForm );

    });
    

})
