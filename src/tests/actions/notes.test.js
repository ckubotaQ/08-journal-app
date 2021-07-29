import configureStore from 'redux-mock-store' //ES6 modules
import thunk from "redux-thunk";
import { startNewNote } from '../../actions/notes';
 
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

    })
    
})
