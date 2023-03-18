import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
    constructor(props) {
        // Su dung props tu component cha
        super(props);
        // Khai bao gia tri khoi tao cua state
        this.state = {
            counter: 1
        };
    }

    increase = () => {
        // thực hiện tăng counter lên khi user click vào button tăng
        const counter = this.state.counter;
        this.setState({ counter: counter + 1 });
    }

    decrease = () => {
        // thực hiện giảm counter lên khi user click vào button giảm
        const counter = this.state.counter;
        this.setState({ counter: counter - 1 });
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render() {
        return (
            <div>
                <p>Giá trị {this.state.counter}</p>
                <button onClick={() => this.increase()}>Tăng</button>
                <button onClick={() => this.decrease()}>Giảm</button>
            </div>
        )
    }
}

export default App;