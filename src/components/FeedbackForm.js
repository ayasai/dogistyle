import React, { useState } from 'react';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);

    window.alert('Feedback submitted successfully!');

    setFormData({
      name: '',
      email: '',
      feedback: ''
    });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Leave Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.inputGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="feedback">Feedback:</label>
          <textarea
            id="feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" style={styles.button}>Submit</button>
      </form>
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
  inputGroup: {
    marginBottom: '20px',
    textAlign: 'left'
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    fontSize: '1em',
    cursor: 'pointer'
  }
};

export default FeedbackForm;