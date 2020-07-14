import React from 'react';
import ReactDOM from 'react-dom';

import './styles/styles.scss';
const { JournalApp } = require("./JournalApp");

ReactDOM.render(
    <JournalApp />,
    document.getElementById('root')
);