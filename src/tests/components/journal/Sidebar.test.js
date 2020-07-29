import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';

import '@testing-library/jest-dom';
import { startLogout } from './../../../actions/auth';
import { startNewNote } from './../../../actions/notes';
import { Sidebar } from './../../../components/journal/Sidebar';

jest.mock('./../../../actions/auth', () => ({
    startLogout: jest.fn()
}));

jest.mock('./../../../actions/notes', () => ({
    startNewNote: jest.fn()
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {
        uid: '1',
        name: 'Ringo'
    },
    ui: {
        loading: false,
        msgError: null
    },
    notes: {
        active: null,
        notes: []
    }
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <Sidebar />
    </Provider>
);

describe('Pruebase en <Sidebar />', () => {

    test('debe de mostrarse correctamente ', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('debe de llamar el logout ', () => {
        //llamar la accion del logout
        wrapper.find('.btn').prop('onClick')();

        expect(startLogout).toHaveBeenCalled();
    });

    test('debe de llamar el startNewNote', () => {
        //llamar la accion del startNewNote
        wrapper.find('.journal__new-entry').prop('onClick')();

        expect(startNewNote).toHaveBeenCalled();
    });

});
