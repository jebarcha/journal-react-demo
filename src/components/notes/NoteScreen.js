import React from 'react'
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">

            <NotesAppBar />

            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                />
                <textarea
                    placeholder="What happened today?"
                    className="notes__text-area"
                >

                </textarea>

                <div className="notes__image">
                    <img
                        alt="imag"
                        src="https://as2.ftcdn.net/jpg/02/54/86/43/500_F_254864356_m6alJegbANZnoRwyEMNKewqkB35I1yqd.jpg"
                    />
                </div>
            </div>
        </div>
    )
}
