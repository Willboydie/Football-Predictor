import './App.css';
import SearchBar from '../Components/SearchBar/SearchBar';
import PredictionList from '../Components/PredictionList/PredictionList';
import { useState, useEffect } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('fc');
  const [predictions, setPredictions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const searchTeams = async(term) => {
      setError(null);
      try {
        const response = await fetch(`http://localhost:3000/search/term=${term}`)
        if (response.ok) {
          const jsonResponse = await response.json();
          setPredictions(jsonResponse);
        }
      } catch (err) {
        console.log(err);
        setError('Failed to fetch predictions. Please try again.');
      }
    }
    
    if (searchTerm) {
      searchTeams(searchTerm);
    }
  }, [searchTerm])

  return (
    <div className="app-container">
      <h1>Football Predictor</h1>
      <SearchBar updateSearchTerm={setSearchTerm}/>
      <div className="predictions-container">
        <PredictionList predictions={predictions}/>
        {error && <div className="error">{error}</div>}
      </div>
    </div>
  )
}

export default App;
