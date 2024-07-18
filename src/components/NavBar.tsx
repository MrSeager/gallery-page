import React, { useState, FC } from 'react';
import '../index.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Card, Nav, Button, Row, Col, Badge, ButtonGroup, Form, Dropdown } from 'react-bootstrap';
//Animation
import AOS from 'aos';
import 'aos/dist/aos.css';
//Icons
import {FaGripLines} from 'react-icons/fa';


interface NavBarProps {
    currTheme: string;
    stopAnim: string;
    handleBtnGroup: () => void;
}

const NavBar: FC<NavBarProps> = ({ currTheme, handleBtnGroup, stopAnim }) => {
    AOS.init();

    return (
        <Nav data-aos={stopAnim} className={`cs-bg-el-${currTheme} shadow-sm m-0 text-white`} >
            <h1 className='display-2 text-center m-5 w-100 pe-none'>Mr. Seager's Portfolio</h1> 
            <Button variant='custom' onClick={handleBtnGroup} className='text-white mx-auto'><FaGripLines /></Button>
        </Nav>
    );
}

export default NavBar;