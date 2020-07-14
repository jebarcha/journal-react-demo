import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(data:image/jpeg;base64,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)'
                }}
            >
            </div>
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo dia (titulo)
                </p>
                <p className="journal__entry-content">
                    Irure occaecat aute veniam eiusmod ex in ex.
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
