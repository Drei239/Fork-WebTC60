import React from 'react';
import logo from '../logo.svg';
import {Layout, Row, Col, Image, Input} from "antd";

const { Header } = Layout;
const { Search } = Input;

const HeaderComponent = (props) => {
    return (
        <Header>
            <Row>
                <Col span={16}>
                    <Image width={80} src={logo}/>
                </Col>
                <Col span={8}>
                    <Search
                        placeholder={'Tìm kiếm tin tức'}
                        enterButton
                        onSearch={props.handleFilterNews}
                        style={{ width: 250, marginTop: 15 }}
                    />
                </Col>
            </Row>
        </Header>
    )
}

export default HeaderComponent