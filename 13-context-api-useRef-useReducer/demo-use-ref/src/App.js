import logo from './logo.svg';
import './App.css';
import UseRefBasic from "./components/1-useRef-basic";
import UseRefNoReRender from "./components/2-useRef-no-rerender";
import ForwardRef from "./components/3-forwardRef";

function App() {
  return (
    <div className="App">
      {/*<UseRefBasic />*/}
      {/*  <UseRefNoReRender />*/}
        <ForwardRef />
    </div>
  );
}

export default App;
