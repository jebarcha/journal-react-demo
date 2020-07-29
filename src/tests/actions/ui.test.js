import { setError, removeError, startLoading, finishLoading } from './../../actions/ui';
import { types } from './../../types/types';

describe('Pruebas en ui-actions', () => {

    test('Todas las acciones debe de crearse', () => {

        const errMsj = 'Test error!!';
        const action = setError(errMsj);

        expect(action).toEqual({
            type: types.uiSetError,
            payload: errMsj
        });

        const removeErrorAction = removeError();
        const startLoadingAction = startLoading();
        const finishLoadingAction = finishLoading();

        expect(removeErrorAction).toEqual({
            type: types.uiRemoveError
        });

        expect(startLoadingAction).toEqual({
            type: types.uiStartLoading
        });

        expect(finishLoadingAction).toEqual({
            type: types.uiFinishLoading
        });
    });

});
