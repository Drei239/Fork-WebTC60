import React, {useReducer} from 'react';

const handleCounterReducer = (state, action) => {
    console.log('current-state', state);
    console.log('current-action', action);
    switch (action.type) {
        case 'INCREASE':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'DECREASE':
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            throw new Error();
    }
}

const UseReducerCounter = () => {
    const [state, dispatch] = useReducer(handleCounterReducer, { counter: 0 });

    const handleIncrease = () => {
        dispatch({ type: 'INCREASE' });
    }

    const handleDecrease = () => {
        dispatch({ type: 'DECREASE' });
    }
    return (
        <>
            <div>
                <h2>{state.counter}</h2>
            </div>
            <div>
                <button onClick={handleIncrease}>Tăng</button>
                <button onClick={handleDecrease}>Giảm</button>
            </div>
        </>
    )
}

export default UseReducerCounter;