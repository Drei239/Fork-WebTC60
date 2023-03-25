import React, {useContext, useState} from 'react';
import { data } from '../data/data';
// Bước 1: khởi tạo context API
const MembersContext = React.createContext();

// Component Cha
const ContextApi = () => {
    const [members, setMembers] = useState(data);

    const removeMembers = (memberId) => {
        const filterMembers = members.filter((m) => m.id !== memberId);
        setMembers(filterMembers);
    }

    return (
        // Bước 2: Khởi tạo 1 provider tại component cha, để wrap lại component con, cháu, chắt...
        <MembersContext.Provider value={{ members, removeMembers }}>
            Hiển thị ra danh sách member tại đây - Tách hiển thị thành component con
            <MemberList removeMembers={removeMembers} />
        </MembersContext.Provider>
    )
}

// Component con
const MemberList = () => {
    // hiển thị component từ thằng cha tại đây
    // get data từ context
    const memberData = useContext(MembersContext);
    console.log('memberData', memberData);
    return (
        <>
            {memberData.members.map((data) => {
                return <Member key={data.id} {...data} />
            })}
        </>
    )
}

// Component cháu
const Member = (props) => {
    // Sử dụng props từ component con
    // Get hàm removeMembers từ component cha để sử dụng
    const { removeMembers } = useContext(MembersContext);

    return (
        <div style={{ display: 'flex' }}>
            <h3>{props.name}</h3>
            <button
                style={{ marginLeft: 10, width: 50, height: 30, marginTop: 20 }}
                onClick={() => removeMembers(props.id)}
            >
                Xóa
            </button>
        </div>
    )
}



export default ContextApi;