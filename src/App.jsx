import './App.css'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import data from './data';

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews  
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          // more stuff coming
          return (
            <article key={id}>
              <img src={image} alt={name} className="person-image" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
      </div>
    </section>
  )
}

export default App
