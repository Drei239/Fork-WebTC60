import React, {useRef} from 'react';

const UseRefNoReRender = () => {
    // stored variable
    const clickedRef = useRef(0);
    const handleSubmit = () => {
        if (clickedRef.current === 3) {
            alert('Cannot click submit, limited !!!');
        }
        clickedRef.current += 1;
    }

    console.log({clickedRef});
    return (
        <>
            <input />
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default UseRefNoReRender;