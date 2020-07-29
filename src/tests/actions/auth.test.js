import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';

import '@testing-library/jest-dom';

import { types } from './../../types/types';
import { login, logout } from '../../actions/auth';
import { startLogout, startLoginEmailPassword } from './../../actions/auth';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};

let store = mockStore(initState);

describe('Pruebas con las acciones de auth', () => {

    beforeAll(() => {
        store = mockStore(initState);
    });

    test('login y logout deben de crear la accion respectiva', () => {

        const uid = 'ABC123';
        const displayName = 'Ringo';

        const loginAction = login(uid, displayName);
        const logoutAction = logout();

        const expectedResultLogin = {
            type: types.login,
            payload: {
                uid: uid,
                displayName: displayName
            }
        };

        expect(loginAction).toEqual(expectedResultLogin);

        expect(logoutAction).toEqual({
            type: types.logout
        })
    });

    test('debe de realizar el startLogout', async () => {

        await store.dispatch(startLogout());

        const actions = store.getActions();
        //console.log(actions);

        expect(actions[0]).toEqual({
            type: types.logout
        });

        expect(actions[1]).toEqual({
            type: types.notesLogoutCleaning
        });
    });

    test('debe de iniciar el startLoginEmailPassword', async () => {

        await store.dispatch(startLoginEmailPassword('test@testing.com', '123456'));

        const actions = store.getActions();
        //console.log(actions);

        expect(actions[4]).toEqual({
            type: types.login,
            payload: {
                uid: 'CNb6PCHWnuZZunZJcypa58Xt9Ex2',
                displayName: null
            }
        })
    })

});
