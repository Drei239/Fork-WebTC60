import React, {useEffect, useRef} from 'react';

const UseRefBasic = () => {
    const refInput = useRef(null);

    const handleSubmitData = (e) => {
        e.preventDefault();
        console.log('click submitted');
        console.log(refInput.current.value);
    }

    useEffect(() => {
        console.log('useEffect called');
        console.log('refInput-element', refInput.current);
    });

    return (
        <>
            <form onSubmit={handleSubmitData}>
                <div>
                    <input name={'username'} type={'text'} className={'username'} ref={refInput} />
                </div>
                <button type={'submit'}>Submit</button>
            </form>
        </>
    )
}

export default UseRefBasic;