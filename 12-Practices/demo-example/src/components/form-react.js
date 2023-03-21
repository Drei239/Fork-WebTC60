// Build 1 demo - Them thong tin member in class

import {useState} from "react";

const FormReact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [members, setMembers] = useState([]);

    const onChangeName = (event) => {
        setName(event.target.value);
    }

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const onChangeAge = (event) => {
        setAge(event.target.value);
    }

    const handleSubmitMember = (e) => {
        e.preventDefault();
        console.log(e);
        if (name && email && age) {
            const newMember = {
                name: name,
                email: email,
                age: age,
            }
            setMembers([...members, newMember]);
        }
    }
    return (
        <article>
            <form onSubmit={handleSubmitMember}>
                <div className='name'>
                    <label htmlFor='name'>Name:</label>
                    <input
                        name={'name'}
                        type={'text'}
                        value={name}
                        onChange={onChangeName}
                    />
                </div>
                <div className='email'>
                    <label htmlFor='email'>Email:</label>
                    <input
                        name={'email'}
                        type={'email'}
                        value={email}
                        onChange={onChangeEmail}
                    />
                </div>
                <div className='age'>
                    <label htmlFor='age'>Age:</label>
                    <input
                        name={'age'}
                        type={'number'}
                        value={age}
                        onChange={onChangeAge}
                    />
                </div>
                <button type={'submit'}>Add new member</button>
            </form>
            <div>
                {members.map((member, index) => {
                    return (
                        <div key={index}>
                            <h4>{member.name}</h4>
                            <h4>{member.email}</h4>
                            <h4>{member.age}</h4>
                        </div>
                    )
                })}
            </div>
        </article>
    )
}

export default FormReact;