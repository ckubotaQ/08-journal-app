import configureStore from 'redux-mock-store' //ES6 modules
import thunk from "redux-thunk";
import { Provider } from "react-redux"
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import { RegisterScreen } from '../../../components/auth/RegisterScreen';
import '../../../setupTest';
import { types } from '../../../types/types';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null
    }
};

let store = mockStore(initState);

const wrapper = mount( 
    <Provider store={ store }>
        <MemoryRouter>
            <RegisterScreen /> 
        </MemoryRouter>
    </Provider>

)
describe('Pruebas en <RegisterScreeb />', () => {

    test('Debe de mostarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    test('debe de hacer el dispatch de la accion respectiva ', () => {
        const emailField = wrapper.find('input[name="email"]');
        emailField.simulate('change',{
            target: {
                value:'',
                name: 'email'
            }
        })
        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        });
        const action = store.getActions();
        expect(action[0]).toEqual({
            type: types.uiSetError, 
            payload: 'email is Required'
        })
    })
    test('debe de mostrar la caja de alerta con el error', () => {
        const initialState = {
            auth: {},
            ui: {
                loading: false,
                msgError: 'Email no es correcto'
            }
        }
        const store = mockStore(initialState);
        const wrapper = mount( 
            <Provider store={ store }>
                <MemoryRouter>
                    <RegisterScreen /> 
                </MemoryRouter>
            </Provider>
        
        )
        expect(wrapper.find('.auth__alert-error').exists()).toBeTruthy;      
        expect(wrapper.find('.auth__alert-error').text().trim()).toBe(initialState.ui.msgError)


    })
    
    


})
