import './App.css'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import { useState } from 'react';
import data from './data';

function App() {
  const [people, setPeople] = useState(data);

  return (
    <div>
      App
    </div>
  )
}

export default App
