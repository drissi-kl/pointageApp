import React, { useState } from 'react'
import AddExceptionalTime from './addExceptionalTime';

export default function ExceptionalTime() {
    const [showAddExceptionalTime, setShowAddExceptionallTime] = useState(false);
    return (
        <div>
        {
            showAddExceptionalTime ? <ShowExceptionalTime /> : <AddExceptionalTime />
        }
        </div>
    )
}
