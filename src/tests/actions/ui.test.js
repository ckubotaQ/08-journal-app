import { finishLoading, removeErrorAction, setErrorAction, startLoading } from "../../actions/ui"
import { types } from "../../types/types";


describe('Pruebas en UI-Actions', () => {
    test('Todas las acciones debde de crearse', () => {
        const action = setErrorAction('Ayudaaa');
        expect(action).toEqual({
            type: types.uiSetError,
            payload: 'Ayudaaa'
        })

        const removeErrorActionAction= removeErrorAction();
        const startLoadingAction= startLoading();
        const finishLoadingAction= finishLoading();
        expect(removeErrorActionAction).toEqual({
            type: types.uiRemoveError
        })
        expect(startLoadingAction).toEqual({
            type: types.uiStartLoading
        })
        expect(finishLoadingAction).toEqual({
            type: types.uiFinishLoading
        })

    })
    
})
