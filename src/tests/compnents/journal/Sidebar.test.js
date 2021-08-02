import configureStore from 'redux-mock-store' //ES6 modules
import thunk from "redux-thunk";
import { Provider } from "react-redux"
import React from 'react';
import { mount } from 'enzyme';
import '../../../setupTest';
import { startLogout } from '../../../actions/auth';
import { startNewNote } from '../../../actions/notes';
import { Sidebar } from '../../../components/journal/Sidebar';

jest.mock('../../../actions/auth', () => ({
    startLogout: jest.fn(),
}))

jest.mock('../../../actions/notes', () => ({
    startNewNote: jest.fn(),
}))
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
    auth: {uid: 'd81y0ksR6eSBbAd1HrNEQIGbjKi1',
            name: 'Carlos Kubota'        
            },
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
const wrapper = mount( 
    <Provider store={ store }>
            <Sidebar />  
    </Provider>

)
describe('Pruebas en <SideBar/>', () => {
    test('debe de mostarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })
    test('debe de llamar el Logout', () => {
        wrapper.find('.btn').prop('onClick')();
        expect( startLogout ).toHaveBeenCalled();
    })
    test('debe de llamar el StartNewNote', () => {
        wrapper.find('.journal__new-entry').prop('onClick')();
        expect( startNewNote ).toHaveBeenCalled();
    })
    
    
    




})
