import configureStore from 'redux-mock-store' //ES6 modules
import thunk from "redux-thunk";
import { login, logout, startLoginEmailPassword, startLogout } from "../../actions/auth"
import { types } from "../../types/types";
function FormDataMock() {
    this.append = jest.fn();
  }
  global.FormData = FormDataMock;
const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const initState = {}
let store = mockStore(initState);


describe('Pruebas con las acciones de Auth', () => {
    beforeEach(() => {
        store = mockStore(initState);
    });
    test('login y logout debe de crear la acción respectiva', () => {
        const uid = 'ABC1234';
        const displayName='Carlos';
        const loginAction = login(uid, displayName);
        const logoutAction = logout();
        
        expect(loginAction).toEqual({
            type: types.login,
            payload: {
                uid, 
                displayName
            }
        })
        expect(logoutAction).toEqual({type: types.logout})
    })
    test('Debe de realizar el Startlogut', async() => {
     await store.dispatch(startLogout());
     const actions = store.getActions();
    expect(actions[0]).toEqual({
        type: types.logout
    });
    expect(actions[1]).toEqual({
        type: types.notesLogoutCleaning
    });
    });
    test('debe de iniciar el startLoginEmailPassword', async() => {
        await store.dispatch( startLoginEmailPassword('test@testing.com','123456q'));
        const actions = store.getActions();
        expect(actions[1]).toEqual({
            type: types.login,
            payload: {
                uid: 'ELLUI7ypKsced2dutIehoTIJZIj1',
                displayName: null
            }
        })
    })
    
    
    
})
