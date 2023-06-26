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

 

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === 'k') {
        event.preventDefault();
        handleSearchClick();
      } else if (event.key === 'Escape') {
        setPopUpOpen(false);
        setColor('white');
      }
    };
    const handleClickOutside = (event) => {
  
      if (
    
        containerRef.current &&
        !containerRef.current.contains(event.target) 
      ) {
        alert("You clicked outside of me!");
      console.log("clicked")

        setPopUpOpen(false);
        setColor('white');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);


    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);

      
    };
  }, [containerRef]);


  document.body.style.backgroundColor = color;

  return (
    <div className="app">
      <div className="search-button" onClick={handleSearchClick}>
        <Search />
        <p className="search-text">Search</p>
        <p className="shortcut-key">Ctrl K</p>
      </div>
      {isPopUpOpen && <PopUp ref={containerRef} />}
    </div>
  );
}

export default App;
