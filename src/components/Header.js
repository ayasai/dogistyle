import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkTheme: false
    };
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    this.setState(prevState => ({ darkTheme: !prevState.darkTheme }));
  }

  render() {
    const { darkTheme } = this.state;
    const currentStyles = darkTheme ? darkStyles : lightStyles;

    document.body.style.backgroundColor = darkTheme ? '#333' : '#FFF';

    return (
      <header style={{ ...styles.header, ...currentStyles.header }}>
        <h1 style={styles.title}>Породы собак</h1>
        <nav>
          <ul style={styles.navList}>
            <li style={styles.navItem}>
              <a style={currentStyles.navLink} href="#home">Главная</a>
            </li>
            <li style={styles.navItem}>
              <a style={currentStyles.navLink} href="#breeds">Породы</a>
            </li>
            <li style={styles.navItem}>
              <a style={currentStyles.navLink} href="#contact">Контакты</a>
            </li>
            <li style={styles.navItem}>
              <a style={currentStyles.navLink} href="#gallery">Галерея</a>
            </li>
          </ul>
        </nav>
        <button style={currentStyles.themeButton} onClick={this.toggleTheme}>
          Сменить тему
        </button>
      </header>
    );
  }
}

const styles = {
  header: {
    padding: '10px 20px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  },
  title: {
    margin: '0',
    fontSize: '2em'
  },
  navList: {
    listStyleType: 'none',
    margin: '0',
    padding: '0',
    display: 'flex'
  },
  navItem: {
    margin: '0 10px'
  }
};

const lightStyles = {
  header: {
    backgroundColor: '#FFFBF1',
    color: '#4CAF50'
  },
  navLink: {
    color: '#4CAF50',
    textDecoration: 'none',
    fontSize: '1.2em'
  },
  themeButton: {
    marginRight: '30px',
    backgroundColor: '#FFFBF1',
    color: '#4CAF50',
    border: '1px solid #4CAF50',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '1em',
    borderRadius: '5px'
  }
};

const darkStyles = {
  header: {
    backgroundColor: '#4CAF50',
    color: '#FFFBF1'
  },
  navLink: {
    color: '#FFFBF1',
    textDecoration: 'none',
    fontSize: '1.2em'
  },
  themeButton: {
    marginRight: '30px',
    backgroundColor: '#4CAF50',
    color: '#FFFBF1',
    border: '1px solid #FFFBF1',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '1em',
    borderRadius: '5px'
  }
};

export default Header;