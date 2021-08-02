


import configureStore from 'redux-mock-store' //ES6 modules
import thunk from "redux-thunk";
import { Provider } from "react-redux"
import React from 'react';
import { mount } from 'enzyme';
import '../../../setupTest';
import { NotesScreen } from '../../../components/notes/NotesScreen';
import { activeNote } from '../../../actions/notes';
jest.mock('../../../actions/notes', () => ({
    activeNote: jest.fn(),
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
            id: 1234,
            title: 'hola',
            body: 'mundo',
            date: 0
            
        },
        notes: []
    }
};
let store = mockStore(initState);
store.dispatch = jest.fn();
const wrapper = mount( 
    <Provider store={ store }>
            <NotesScreen />  
    </Provider>

)
describe('Pruebas en <NoteScreen/>', () => {
    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    test('Debe de disparse el active note', () => {
        wrapper.find('input[name="title"]').simulate('change',{
            target: {
                name: 'title',
                value:'hola k'
            }
        });
        expect(activeNote).toHaveBeenLastCalledWith(1234, {
            body: 'mundo',
            title: 'hola k',
            id: 1234,
            date: 0,
        });


    })
    
    
})
