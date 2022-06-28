//rfc

import React, { useState } from 'react'

const Timer2 = () => {

    const incrementTimer = () => {
        console.log("rendered")
        setTime(
            time + 1
        )
    };

    const [time, setTime] = useState(0);

    setTimeout(() => { incrementTimer() }, 1000);

    return (
        <>
            <div>
                {time}
            </div>
            <button onClick={incrementTimer}>
                Increment
            </button>
        </>
    )
};

export default Timer2
