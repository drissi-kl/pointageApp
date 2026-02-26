import React, { useState } from 'react'
import AddExceptionalTime from './addExceptionalTime';
import ShowExceptionalTime from './showExceptionalTime';

export default function ExceptionalTime({ user }) {
    const [showAddExceptionalTime, setShowAddExceptionallTime] = useState(false);
    return (
        <div>
            {
                showAddExceptionalTime ? <AddExceptionalTime user={user} showExceptionalTime={() => { setShowAddExceptionallTime(false) }} />
                    : <ShowExceptionalTime user={user} addExceptionalTime={() => { setShowAddExceptionallTime(true) }} />
            }
        </div>
    )
}
