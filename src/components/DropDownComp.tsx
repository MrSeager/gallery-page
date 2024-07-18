import React, { useState, FC } from 'react';
import '../index.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Dropdown } from 'react-bootstrap';
//Animation
import AOS from 'aos';
import 'aos/dist/aos.css';

type DropDownCompProps = {
    currTheme: string;
    setSelectedTechnology: (selectedTechnology: string) => void;
    selectedTechnology: string;
}

const DropDownComp: FC<DropDownCompProps> = ({ currTheme, setSelectedTechnology, selectedTechnology }) => {
    
    AOS.init();

    return (
    <Dropdown className='cs-w-2 mx-auto ms-lg-auto me-lg-5'>
        <Dropdown.Toggle className={`text-uppercase my-3 cs-select border-0 w-100 cs-bg-el-${currTheme} text-white text-center px-0`}>{selectedTechnology !== '' ? selectedTechnology : 'technology'}</Dropdown.Toggle>
        <Dropdown.Menu className={`w-100 text-center text-uppercase cs-bg-el-${currTheme}`}>
          <Dropdown.Item onClick={(e) => setSelectedTechnology('')} className={`border-0 cs-btn-${currTheme}`}>Technology</Dropdown.Item>
          <Dropdown.Item onClick={(e) => setSelectedTechnology('html')} className={`border-0 cs-btn-${currTheme}`}>HTML</Dropdown.Item>
          <Dropdown.Item onClick={(e) => setSelectedTechnology('css')} className={`border-0 cs-btn-${currTheme}`}>CSS</Dropdown.Item>
          <Dropdown.Item onClick={(e) => setSelectedTechnology('javascript')} className={`border-0 cs-btn-${currTheme}`}>JavaScript</Dropdown.Item>
          <Dropdown.Item onClick={(e) => setSelectedTechnology('react')} className={`border-0 cs-btn-${currTheme}`}>React</Dropdown.Item>
          <Dropdown.Item onClick={(e) => setSelectedTechnology('bootstrap')} className={`border-0 cs-btn-${currTheme}`}>Bootstrap</Dropdown.Item>
          <Dropdown.Item onClick={(e) => setSelectedTechnology('typescript')} className={`border-0 cs-btn-${currTheme}`}>TypeScript</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
    );
};

export default DropDownComp;