 /**
 * @jest-environment node
 */
import configureStore from 'redux-mock-store' //ES6 modules
import thunk from "redux-thunk";
import { startLoadingNotes, startNewNote, startSaveNote, startUploading } from '../../actions/notes';
import { db } from '../../firebase/firebaseConfig';
import { fileUpload } from '../../helpers/fileUpload';
import { types } from "../../types/types";



jest.mock('../../helpers/fileUpload', () => {
    return {
        fileUpload: () => {
            return Promise.resolve(
                "https://misfotos.com/photo.png"
            );
        },
    };
})
function FormDataMock() {
    this.append = jest.fn();
  }
  global.FormData = FormDataMock;
const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const initState = {
    auth:{ 
        uid: 'TESTK'
    },
    notes: {
        active: {
            id: 'JXOvcw0tFrSBG2MFHoWg',
            title: 'hila',
            body: 'body'
        }
    }
    
}
// You would import the action from your codebase in a real scenario
let store = mockStore(initState);
describe('Pruebas con las acciones de notes', () => {
    beforeEach(() => {
        store = mockStore(initState);
    });

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
        });
        const docId =actions[0].payload.id;
        await db.doc(`/TESTK/journal/notes/${docId}`).delete();
    })

    test('debe de cargar las notas ', async() => {
       
        await store.dispatch(startLoadingNotes('TESTK'));
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: types.notesLoad,
            payload: expect.any(Array)
        });
        const expected = {
            id:expect.any(String),
            title: expect.any(String),
            body: expect.any(String),
            date: expect.any(Number),
        }
        expect(actions[0].payload[0]).toMatchObject(expected);
        
    })
    test('startSaveNote debe de actualizar la nota', async() => {
        const note = {
            id: 'GlOVkfbsw58Kt772tFY9',
            title: 'title',
            body: 'body'
        };
        await store.dispatch(startSaveNote(note));
        const actions = store.getActions();
        expect(actions[0].type).toBe(types.notesUpdated);
        expect(actions[0])
        const docRef = await db.doc(`/TESTK/journal/notes/${note.id}`).get();
        expect(docRef.data().title).toBe(note.title);
    })
    
    test('startUploading debe de actualizar el url del entry', async() => {
        
        const file = [];
        await store.dispatch(startUploading(file));
        const docRef= await db.doc("/TESTK/journal/notes/JXOvcw0tFrSBG2MFHoWg").get(); 
        expect(docRef.data().url).toBe('https://misfotos.com/photo.png');
    })  
    
    
})
