
import { authReducer } from './../../reducers/authReducer';
import { types } from './../../types/types';
describe('Pruebas en authReducer', () => {

    test('debe de realizar el login', () => {

        const initState = {};
        const action = {
            type: types.login,
            payload: {
                uid: '123456',
                displayName: 'Ringo'
            }
        }
        const state = authReducer(initState, action);

        //console.log(state);
        expect(state).toEqual({
            uid: '123456',
            name: 'Ringo'
        })
    });

    test('debe de realizar el logout', () => {

        const initState = {
            uid: '123456',
            name: 'Ringo'
        };

        const action = {
            type: types.logout
        }
        const state = authReducer(initState, action);

        expect(state).toEqual({})
    });

    test('debe regresar el initialState', () => {

        const initState = {
            uid: '123456',
            name: 'Ringo'
        };

        const action = {
            type: 'anything'
        }
        const state = authReducer(initState, action);

        expect(state).toEqual(initState);
    });


});
