
import { types } from './../../types/types';
describe('Pruebas en types.js', () => {
    test('debe de contener el objecto con los types ', () => {

        const expectedTypes = {
            login: '[Auth] Login',
            logout: '[Auth] Logout',

            uiSetError: '[UI] Set error',
            uiRemoveError: '[UI] Remove error',

            uiStartLoading: '[UI] Start loading',
            uiFinishLoading: '[UI] Finish loading',

            notesAddNew: '[Notes] New note',
            notesActive: '[Notes] Set active note',
            notesLoad: '[Notes] Load notes',
            notesUpdated: '[Notes] Updated note',
            notesFileUrl: '[Notes] Updated Image Url',
            notesDelete: '[Notes] Delete note',
            notesLogoutCleaning: '[Notes] Logout Cleaning',
        };

        expect(types).toEqual(expectedTypes);

    })

});
