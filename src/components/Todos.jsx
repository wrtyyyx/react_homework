import React from 'react';
const today = new Date();

function formatDate(date) {
    return new Intl.DateTimeFormat(
        'en-US',
        { weekday: 'long' }
    ).format(date);
}
const Todos = () => {
    return (
        <div>
            <h1>To Do List for {formatDate(today)}</h1>
        </div>
    );
};

export default Todos;