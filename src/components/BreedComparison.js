import React, { useState } from 'react';

const BreedComparison = ({ breeds }) => {
  const [selectedBreeds, setSelectedBreeds] = useState([]);

  const handleSelectChange = (event) => {
    const value = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedBreeds(value);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Сравнение пород</h2>
      <select multiple={true} onChange={handleSelectChange} style={styles.select}>
        {breeds.map((breed, index) => (
          <option key={index} value={index}>
            {breed.name}
          </option>
        ))}
      </select>
      <div style={styles.comparisonContainer}>
        {selectedBreeds.map((index) => {
          const breed = breeds[index];
          return (
            <div key={index} style={styles.card}>
              <img src={breed.image} alt={breed.name} style={styles.image} />
              <h3 style={styles.cardTitle}>{breed.name}</h3>
              <p style={styles.cardDescription}>{breed.description}</p>
              <a href={breed.link} style={styles.link} target="_blank" rel="noopener noreferrer">
                Подробнее
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center'
  },
  title: {
    fontSize: '2em',
    margin: '20px 0',
    color: '#4CAF50'
  },
  select: {
    width: '300px',
    height: '150px',
    fontSize: '1em',
    padding: '10px',
    margin: '20px 0'
  },
  comparisonContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  card: {
    backgroundColor: '#FFFBF1',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '20px',
    width: '250px',
    padding: '15px',
    textAlign: 'center',
    transition: 'transform 0.3s',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px'
  },
  cardTitle: {
    fontSize: '1.5em',
    margin: '10px 0',
    color: '#4CAF50'
  },
  cardDescription: {
    fontSize: '1em',
    color: '#555'
  },
  link: {
    color: '#4CAF50',
    textDecoration: 'none',
    fontSize: '1em'
  }
};

export default BreedComparison;