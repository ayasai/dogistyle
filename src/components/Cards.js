
import React from 'react';

const Cards = ({ breeds }) => {
  return (
    <div style={styles.cardsContainer}>
      {breeds.map((breed, index) => (
        <a key={index} href={breed.link} style={styles.cardLink}>
          <div style={styles.card}>
            <img src={breed.image} alt={breed.name} style={styles.image} />
            <h2 style={styles.title}>{breed.name}</h2>
            <p style={styles.description}>{breed.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

const styles = {
  cardsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px',
    marginTop: '80px'
  },
  cardLink: {
    textDecoration: 'none',
    color: 'inherit'
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
  cardHovered: {
    transform: 'scale(1.05)',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px'
  },
  title: {
    fontSize: '1.5em',
    margin: '10px 0',
    color: '#4CAF50'
  },
  description: {
    fontSize: '1em',
    color: '#555'
  }
};

export default Cards;