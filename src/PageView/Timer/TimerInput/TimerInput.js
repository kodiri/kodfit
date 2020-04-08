import React from 'react';

export default function TimerInput({field, name}) {
    return (
        <input
             type='number'
             name={name}
             min='0'
             max='60'
             onChange={field}
        />
    )
}