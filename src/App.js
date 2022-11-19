import logo from './logo.svg';
import './App.css';
import LineChart from './Charts/LineChart';
// import TimeSeries from './Charts/TimeSeries';
// import Histogram from './Charts/Histogram';
function App() {
  return (
    <div className="App">
      <div className ="row">
        <LineChart  height = {400} width = {500} />
      </div>
    </div>
  );
}

export default App;
