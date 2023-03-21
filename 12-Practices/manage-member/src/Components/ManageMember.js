import React, {useState} from 'react';
import { data } from '../people';

const ManageMember = () => {
    const [people, setPeople] = useState(data);

    console.log({people});
    return (
        <>
            <h1>List member:</h1>
        </>
    )
}

export default ManageMember;