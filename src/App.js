import logo from './logo.svg';
import './App.css';
import LineChart from './Charts/LineChart';
// import TimeSeries from './Charts/TimeSeries';
// import Histogram from './Charts/Histogram';
import Counter from './Counter';
function App() {
  return (
    <div className="App">
      <div className ="row">
        {/* <LineChart  height = {400} width = {500} /> */}
        <Counter /> 
        {/* <h1>Hello</h1> */}
      </div>
    </div>
  );
}

export default App;
