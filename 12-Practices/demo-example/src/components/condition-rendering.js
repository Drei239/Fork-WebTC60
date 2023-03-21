import React, {useEffect, useState} from 'react';

const API_URL = 'https://api.github.com/users/anhtbok92';
const ConditionRendering = () => {
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        // call API o day
        // Tuong duong voi componentDidMount trong class component hoac trong component life cycle
        console.log('CALL API');
        fetch(API_URL)
            .then((response) => {
                console.log('response', response);
                if (response.status === 200) {
                    return response.json();
                } else {
                    setIsLoading(false);
                    setIsError(true);
                    throw new Error(response.statusText);
                }
            }).then((user) => {
                console.log('user info', user);
                const { login } = user;
                setUser(login);
                setIsLoading(false);
                setIsError(false);
            }).catch((error) => {
                console.log('error', error);
                setIsError(true);
                setIsLoading(false);
            });
    }, []);

    // if (isLoading) {
    //     return (
    //         <div>
    //             <h2>Loading data, please wait....</h2>
    //         </div>
    //     )
    // }
    //
    // if (isError) {
    //     return (
    //         <div>
    //             <h2>Error page, please try again !</h2>
    //         </div>
    //     )
    // }

    return (
        <>
            {user && (
                <div>
                    <h1>Demo example call API with useEffect</h1>
                    <h2>Show username: {user}</h2>
                </div>
            )}
            {isError && !user && (
                <h2>Error page, please try again !</h2>
            )}
            {isLoading && (
                <h2>Loading data, please wait....</h2>
            )}
            {/*// call API success -> show thong tin user*/}
            {/*// dang call API chua ket qua -> show loading*/}
            {/*// call API that bai hoac tra ve loi -> show loi*/}
        </>
    )
}

export default ConditionRendering;