import React from 'react'
import { AppRouter } from './routers/AppRouter';

export const JournalApp = () => {
    return (
        <div>
            {/* <AuthContext.Provider value={{ user, dispatch }}> */}
            <AppRouter />
            {/* </AuthContext.Provider> */}
        </div>
    )
};
