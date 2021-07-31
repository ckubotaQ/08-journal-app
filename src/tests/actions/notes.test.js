import configureStore from 'redux-mock-store' //ES6 modules
import thunk from "redux-thunk";
import { startNewNote } from '../../actions/notes';
import { types } from "../../types/types";

 
const middlewares = [thunk]
const mockStore = configureStore(middlewares)
 
// You would import the action from your codebase in a real scenario
const store = mockStore({
    auth:{ 
        uid: 'TESTK'

    }
})



describe('Pruebas con las acciones de notes', () => {
    test('debe de crear una nueva nota startNewNote', async() => {
        await store.dispatch(startNewNote());
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: types.notesActive,
            payload:{
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        })
        expect(actions[1]).toEqual({
            type: types.notesAddNew,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        })
    })
    
})
