import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Layout, Breadcrumb } from 'antd';
import HeaderComponent from "./Components/Header";
import FooterComponent from "./Components/Footer";
import News from "./Components/News";
import newsJson from './news.json';

const { Content } = Layout;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: newsJson,
            newsFiltered: newsJson
        }
    }

    handleFilterNews = (keyword) => {
        console.log(keyword);
        const filterData = this.state.news.filter((item) => {
            return item.title.indexOf(keyword) > -1;
        });
        this.setState({ newsFiltered: filterData });
    }

    render() {
        return (
            <Layout className='layout'>
                <HeaderComponent handleFilterNews={this.handleFilterNews} />
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-content">
                        <News news={this.state.newsFiltered} />
                    </div>
                </Content>
                <FooterComponent />
            </Layout>
        )
    }
}

export default App;
