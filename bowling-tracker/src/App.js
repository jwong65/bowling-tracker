import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResultsPage from "./components/ResultsPage";
import TablePage from "./components/TablePage";

import './App.css'

function App() {

  return (
    <Router>
    <div className="App">
      <h1>Bowling Score Tracker</h1>
      <Routes>
          <Route path="/" element={<TablePage />}/>
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
     
    </div>
    </Router>
  );
}

export default App;
