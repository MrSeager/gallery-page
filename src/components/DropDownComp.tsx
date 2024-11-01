import React, { FC } from 'react';
import '../index.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Dropdown } from 'react-bootstrap';

type DropDownCompProps = {
    currTheme: string;
    setSelectedTechnology: (selectedTechnology: string) => void;
    selectedTechnology: string;
    handleSortChange: (order: string) => void;
}

const DropDownComp: FC<DropDownCompProps> = ({ currTheme, setSelectedTechnology, selectedTechnology, handleSortChange }) => {
    return (
        <Container fluid className='px-lg-5 d-flex flex-row justify-content-between'>
            <Dropdown className='cs-w-2 ms-lg-5 ms-0'>
                <Dropdown.Toggle className={`text-uppercase my-3 cs-select border-0 w-100 cs-bg-el-${currTheme} shadow text-white text-center px-0`}>Sort</Dropdown.Toggle>
                <Dropdown.Menu className={`w-100 shadow text-center cs-bg-el-${currTheme}`}>
                    <Dropdown.Item 
                        className={`border-0 cs-btn-${currTheme}`} 
                        onClick={() => handleSortChange('old')}>
                            Old Ones First
                    </Dropdown.Item>
                    <Dropdown.Item 
                        className={`border-0 cs-btn-${currTheme}`} 
                        onClick={() => handleSortChange('new')}>
                            New Ones First
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown className='cs-w-2 me-lg-5 me-0'>
                <Dropdown.Toggle className={`text-uppercase my-3 cs-select border-0 w-100 cs-bg-el-${currTheme} shadow text-white text-center px-0`}>{selectedTechnology !== '' ? selectedTechnology : 'technology'}</Dropdown.Toggle>
                <Dropdown.Menu className={`w-100 shadow text-center cs-bg-el-${currTheme}`}>
                    <Dropdown.Item onClick={(e) => setSelectedTechnology('')} className={`border-0 cs-btn-${currTheme}`}>Technology</Dropdown.Item>
                    <Dropdown.Item onClick={(e) => setSelectedTechnology('html')} className={`border-0 cs-btn-${currTheme}`}>HTML</Dropdown.Item>
                    <Dropdown.Item onClick={(e) => setSelectedTechnology('css')} className={`border-0 cs-btn-${currTheme}`}>CSS</Dropdown.Item>
                    <Dropdown.Item onClick={(e) => setSelectedTechnology('javascript')} className={`border-0 cs-btn-${currTheme}`}>JavaScript</Dropdown.Item>
                    <Dropdown.Item onClick={(e) => setSelectedTechnology('react')} className={`border-0 cs-btn-${currTheme}`}>React</Dropdown.Item>
                    <Dropdown.Item onClick={(e) => setSelectedTechnology('bootstrap')} className={`border-0 cs-btn-${currTheme}`}>Bootstrap</Dropdown.Item>
                    <Dropdown.Item onClick={(e) => setSelectedTechnology('typescript')} className={`border-0 cs-btn-${currTheme}`}>TypeScript</Dropdown.Item>
                    <Dropdown.Item onClick={(e) => setSelectedTechnology('reactspring')} className={`border-0 cs-btn-${currTheme}`}>ReactSpring</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Container>
    );
};

export default DropDownComp;