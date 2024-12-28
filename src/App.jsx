import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Movies from './components/Movies';


export default function App() {
  
  const [results, setResults] = useState(0);

  return (
    <div>
     
      <Navbar results={results}  />
      <Movies setResults={setResults}  />
    </div>
  );
}
