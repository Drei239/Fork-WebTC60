import React, {useState} from 'react';
import { data } from '../people';
import {Avatar, Button, Col, List, Row, Popconfirm, message} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const ManageMember = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [people, setPeople] = useState(data);

    console.log({people});

    const removePeople = (peopleId) => {
        const filterPeople = people.filter((item) => item.id !== peopleId);
        setPeople(filterPeople);
    }

    const confirm = (e) => {
        console.log(e);
        setPeople([]);
        messageApi.success('Đã xóa thành công toàn bộ member!');
        // message.success('Đã xóa thành công toàn bộ member');
    };

    const cancel = (e) => {
        console.log(e);
        messageApi.info('Hủy xóa!');
    };

    return (
        <>
            {contextHolder}
            <Row style={{ marginTop: 15 }}>
                <Col span={16}>
                    <h2 style={{ float: 'left', marginLeft: 15 }}>Tổng số thành viên: {people.length}</h2>
                </Col>
                <Col span={8}>
                    <Popconfirm
                        title="Bạn có chắc chắn muốn xóa toàn bộ thành viên không ?"
                        onConfirm={confirm}
                        onCancel={cancel}
                        okText="Có"
                        cancelText="Không"
                    >
                        <Button type='primary' size='middle' style={{ float: 'right', marginRight: 15}}>Xóa toàn bộ</Button>
                    </Popconfirm>
                </Col>
            </Row>
            <div>
                <List
                    itemLayout="horizontal"
                    dataSource={people}
                    renderItem={(item, index) => (
                        <List.Item style={{ textAlign: 'left' }}>
                            <List.Item.Meta
                                avatar={<Avatar src={item.avatar} />}
                                title={<a href="https://ant.design">{`${item.first_name} ${item.last_name}`}</a>}
                                description={
                                    <div>
                                        <Row>
                                            <Col>Email address: </Col>
                                            <Col>{item.email}</Col>
                                        </Row>
                                        <Row>
                                            <Col>Gender: </Col>
                                            <Col>{item.gender}</Col>
                                        </Row>
                                        <Row>
                                            <Col>Street Address: </Col>
                                            <Col>{item.address}</Col>
                                        </Row>

                                    </div>
                                }
                            />
                            <DeleteOutlined
                                style={{ cursor: 'pointer', marginRight: 20 }}
                                onClick={() => removePeople(item.id)}
                            />
                        </List.Item>
                    )}
                />
            </div>
        </>
    )
}

export default ManageMember;