import configureStore from 'redux-mock-store' //ES6 modules
import thunk from "redux-thunk";
import { Provider } from "react-redux"
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import '../../setupTest';
import { AppRouter } from '../../routers/AppRouter';
import { act } from 'react-dom/test-utils';
import { firebase } from "../../firebase/firebaseConfig";
import { login } from '../../actions/auth';

jest.mock('../../actions/auth', () => ({
   login: jest.fn(),
}))



const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null
    },
    notes: {
        active:{
            id: 'abc',
            
        },
        notes: []
    }
};

let store = mockStore(initState);
store.dispatch = jest.fn();







describe('Pruebas en <AppRouter/>', () => {
    test('debe de llamar el router si estoy autenticado', async() => {
       let user;
       
       
        await act( async() =>{
            const userCred = await firebase.auth().signInWithEmailAndPassword('testing@hotmail.com','123456');
            user = userCred.user;
            const wrapper = mount( 
                <Provider store={ store }>
                    <MemoryRouter>
                        <AppRouter /> 
                    </MemoryRouter>
                </Provider>
            
            )
        })
      

        expect(login).toHaveBeenCalledWith('yHrNSH7bvdWM9Q52MGq30y63Qft1', null);


    })
    
})
