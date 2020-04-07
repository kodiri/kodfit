import React from 'react';

export default function TimerInput({field}) {
    return (
        <input
             type='number'
             name='minutes'
             min='0'
             max='60'
             onChange={field}
        />
    )
}