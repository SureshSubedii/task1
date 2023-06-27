import { Search } from '@mui/icons-material';
import { useEffect, useRef, useState } from 'react';
import PopUp from './components/PopUp';
import './styles/App.css';

function App() {
  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const [color, setColor] = useState('white');
  const containerRef = useRef(null);

  const handleSearchClick = () => {
    setPopUpOpen(true);
    setColor('#5a5a5a');
  };

  const handleClosePopUp = () => {
    setPopUpOpen(false);
    setColor('white');
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === 'k') {
        event.preventDefault();
        handleSearchClick();
      } else if (event.key === 'Escape') {
        handleClosePopUp();
      }
    };

    const handleClick = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        handleClosePopUp();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  document.body.style.backgroundColor = color;

  return (
    <div className="app">
      <div className="search-button" onClick={handleSearchClick}>
        <Search />
        <p className="search-text">Search</p>
        <p className="shortcut-key">Ctrl K</p>
      </div>
      {isPopUpOpen && (
        <>
          <div className="back" onClick={handleClosePopUp} />
          <PopUp ref={containerRef} />
        </>
      )}
    </div>
  );
}

export default App;
