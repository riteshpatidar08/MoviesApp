import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Movies from './components/Movies';
export default function App() {
  const [query, setQuery] = useState('');
  const [results , setResults] = useState(0) ;
 

  return (
    <div>
    <Navbar results={results} setQuery={setQuery}/>
    <Movies setResults={setResults} query={query}/>
    </div>
  );
}
