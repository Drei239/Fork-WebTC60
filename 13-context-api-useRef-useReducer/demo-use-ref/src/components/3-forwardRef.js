import React, {useEffect, useRef} from 'react';
import InputComponent from "./InputComponent";

const ForwardRef = () => {
    const inputRef = useRef(null);

    useEffect(() => {
       console.log('useEffect called');
       console.log(inputRef.current);
    }, [inputRef]);

    return (
        <div>
            <InputComponent ref={inputRef} />
        </div>
    )
}

export default ForwardRef;