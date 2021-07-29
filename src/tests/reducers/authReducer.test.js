import { authReducer } from "../../reducers/authReducer"
import { types } from "../../types/types";

describe('Pruebas en AuthReducer', () => {
    test('debe de realizar el login', () => {
        
        const initState = {};
        const action = {
            type: types.login,
            payload: {
                uid: 'abc',
                displayName: 'Rebeca'
            }
        };

        const state=authReducer(initState, action);
        expect(state).toEqual({
            uid:'abc',
            name: 'Rebeca'
        })

    })
    test('debe de realizar el logout', () => {
        
        const initState = {
            uid:'abc',
            name: 'Rebeca'
        };
        const action = {
            type: types.logout,
        };

        const state=authReducer(initState, action);
        expect(state).toEqual({});

    })
    test('debe de conservar el initState', () => {
        
        const initState = {
            uid:'abc',
            name: 'Rebeca'
        };
        const action = {
            type: 'AyudaSoyunError',
        };

        const state=authReducer(initState, action);
        expect(state).toEqual(initState);

    })
    



})
