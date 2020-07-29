import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import { startNewNote, startLoadingNotes, startSaveNote, startUploading } from './../../actions/notes';
import { types } from './../../types/types';
import { db } from '../../firebase/firebase-config';

jest.mock('./../../helpers/fileUpload', () => ({
    fileUpload: jest.fn(() => {
        return 'https://hola-mundo.com/test.jpg'
        //return Promise.resolve('https://hola-mundo.com/test.jpg');
    })
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {
        uid: 'TESTING'
    },
    notes: {
        active: {
            id: 'zbBgZhgQMsQc5nli28M7',
            title: 'Hola',
            body: 'Mundo-body'
        }
    }
};

let store = mockStore(initState);

describe('Pruebas con las acciones de notes', () => {

    beforeEach(() => {
        store = mockStore(initState);
    });

    test('debe de crear una nueva nota startNewNote', async () => {

        await store.dispatch(startNewNote());

        const actions = store.getActions();
        //console.log(actions);
        const payloadTest = {
            id: expect.any(String),
            title: '',
            body: '',
            date: expect.any(Number)
        };

        expect(actions[0]).toEqual({
            type: types.notesActive,
            payload: payloadTest
        });

        expect(actions[1]).toEqual({
            type: types.notesAddNew,
            payload: payloadTest
        });

        const docId = actions[0].payload.id;
        await db.doc(`/TESTING/journal/notes/${docId}`).delete();

    });

    test('debe de cargar las notas el startLoadingNotes', async () => {

        await store.dispatch(startLoadingNotes('TESTING'));

        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: types.notesLoad,
            payload: expect.any(Array)
        });

        const expected = {
            id: expect.any(String),
            title: expect.any(String),
            body: expect.any(String),
            date: expect.any(Number),
        }

        expect(actions[0].payload[0]).toMatchObject(expected);

    });

    test('startSaveNote debe de actualizar la nota', async () => {

        const note = {
            id: 'zbBgZhgQMsQc5nli28M7',
            title: 'titulo',
            body: 'body'
        };

        await store.dispatch(startSaveNote(note));

        const actions = store.getActions();
        //console.log(actions);

        expect(actions[0].type).toBe(types.notesUpdated);

        const docRef = await db.doc(`/TESTING/journal/notes/${note.id}`).get();

        expect(docRef.data().title).toBe(note.title);

    });

    test('startUploading debe actualizar url del entry', async () => {

        const file = new File([], 'foto.jpg');
        await store.dispatch(startUploading(file));

        const docRef = await db.doc(`/TESTING/journal/notes/zbBgZhgQMsQc5nli28M7`).get();

        expect(docRef.data().url).toBe('https://hola-mundo.com/test.jpg');

    });



});