import React, { useState, useEffect } from 'react';
import './index.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
//Animation
import AOS from 'aos';
import 'aos/dist/aos.css';
//Components
import NavBar from './components/NavBar.tsx';
import DropDownComp from './components/DropDownComp.tsx';
import ProjectCards from './components/ProjectCards.tsx';
import FooterComp from './components/FooterComp.tsx';

const MainPage = () => {
    const [currTheme, setCurrTheme] = useState(isNaN(localStorage.getItem('currTheme')) || 1);
    const [selectedTechnology, setSelectedTechnology] = useState('');
    const [stopAnim, setStopAnim] = useState('fade-down');

    const [sortOrder, setSortOrder] = useState('old');
    
    AOS.init({
      throttleDelay: 99,
    });
    
    const handleThemeChange = (themeNumber) => {
      setCurrTheme(themeNumber);
      localStorage.setItem('currTheme', themeNumber);
    };
  
    // Retrieve the theme from localStorage when the component mounts
    useEffect(() => {
      const savedTheme = localStorage.getItem('currTheme');
      if (savedTheme) {
        setCurrTheme(Number(savedTheme));
      }
    }, []);

    const handleSortChange = (order) => {
      setSortOrder(order);
    };

    return(
      <Container fluid className='bg-white p-0 overflow-hidden'>
        <NavBar 
            currTheme={currTheme} 
            stopAnim={stopAnim} 
            setCurrTheme={setCurrTheme} 
            setStopAnim={setStopAnim} 
            handleThemeChange={handleThemeChange} />
        <DropDownComp 
            currTheme={currTheme} 
            setSelectedTechnology={setSelectedTechnology} 
            selectedTechnology={selectedTechnology}
            handleSortChange={handleSortChange} />
        <ProjectCards 
            currTheme={currTheme} 
            selectedTechnology={selectedTechnology}
            sortOrder={sortOrder} />
        <FooterComp 
            currTheme={currTheme} />
      </Container>
    );
  };

  export default MainPage;