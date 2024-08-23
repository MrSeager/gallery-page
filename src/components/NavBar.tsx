import React, { useState, FC } from 'react';
import '../index.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Nav, Button, ButtonGroup } from 'react-bootstrap';
//Animation
import { useAutoAnimate } from '@formkit/auto-animate/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
//Icons
import {FaGripLines} from 'react-icons/fa';

type NavBarProps = {
    currTheme: string;
    stopAnim: string;
    setCurrTheme: (currTheme: string) => void;
    setStopAnim: (stopAnim: string) => void;
    handleThemeChange: (themeChange: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ currTheme, stopAnim, setCurrTheme, setStopAnim, handleThemeChange }) => {
    const [showBtnGroup, setShowBtnGroup] = useState(false);
    const [parent, enableAnimations] = useAutoAnimate();
    
    const handleBtnGroup = () => {
        setShowBtnGroup(!showBtnGroup);
    };

    AOS.init();

    return (
        <Container fluid className='p-0 shadow' ref={parent}>
            <Nav data-aos={stopAnim} className={`cs-bg-el-${currTheme} shadow-sm m-0 text-white`} >
                <h1 className='display-2 text-center m-5 w-100 pe-none'>Mr. Seager's Portfolio</h1> 
                <Button variant='custom' onClick={handleBtnGroup} className='text-white mx-auto'><FaGripLines /></Button>
            </Nav>
            {showBtnGroup && (
            <ButtonGroup className='p-0 w-100 m-0 cs-h shadow'>
                <Button onClick={() => {setCurrTheme('1'); setStopAnim(''); handleThemeChange('1')}} className='cs-bg-el-1 border-0 cs-btngroup'></Button>
                <Button onClick={() => {setCurrTheme('2'); setStopAnim(''); handleThemeChange('2')}} className='cs-bg-el-2 border-0'></Button>
                <Button onClick={() => {setCurrTheme('3'); setStopAnim(''); handleThemeChange('3')}} className='cs-bg-el-3 border-0'></Button>
                <Button onClick={() => {setCurrTheme('4'); setStopAnim(''); handleThemeChange('4')}} className='cs-bg-el-4 border-0 cs-btngroup'></Button>
            </ButtonGroup>
            )}
        </Container>
    );
}

export default NavBar;