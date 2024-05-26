import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import autoAnimate from '@formkit/auto-animate';
import { Container, Card, Nav, Button, Row, Col, Badge, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaDeviantart, FaYoutube, FaExternalLinkAlt, FaReact, FaBootstrap, FaGripLines } from 'react-icons/fa';
import { PiFileHtmlDuotone, PiFileCssDuotone, PiDesktopTower, PiDeviceMobileThin } from "react-icons/pi";
import { RiJavascriptFill } from "react-icons/ri";
import axios from 'axios';

import { useAutoAnimate } from '@formkit/auto-animate/react'

const MainPage = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [currTheme, setCurrTheme] = useState(1);
  const [showBtnGroup, setShowBtnGroup] = useState(false);
  const parentRef = useRef(null);

  const [animationParent] = useAutoAnimate();

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/MrSeager/gallery-page/main/src/data.json').then((response) => {
      setPortfolio(response.data.portfolio);
    });
  }, []);

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);   
    }
  }, [parentRef]);

  const handleBtnGroup = () => {
    setShowBtnGroup(!showBtnGroup);
  };

  return(
    <main className='bg-white' ref={animationParent}>
      <Nav className={`cs-bg-el-${currTheme} shadow-sm m-0 text-white`} >
        <h1 className='display-2 text-center m-5 w-100 pe-none'>Mr. Seager's Portfolio</h1> 
        <Button variant='custom' onClick={handleBtnGroup} className='text-white mx-auto'><FaGripLines /></Button>
      </Nav>
      {showBtnGroup && (
        <ButtonGroup className='p-0 w-100 m-0 cs-h'>
          <Button onClick={() => setCurrTheme(1)} className='cs-bg-el-1 border-0 cs-btngroup'></Button>
          <Button onClick={() => setCurrTheme(2)} className='cs-bg-el-2 border-0'></Button>
          <Button onClick={() => setCurrTheme(3)} className='cs-bg-el-3 border-0'></Button>
          <Button onClick={() => setCurrTheme(4)} className='cs-bg-el-4 border-0 cs-btngroup'></Button>
        </ButtonGroup>
        )}

      <Container className='cs-grid mt-3' ref={parentRef}>
        {portfolio.map((portfolio, index) => (
          <Card className={`m-3 cs-bg-el-${currTheme} text-white shadow-sm`}>
            <Card.Img fluid src={portfolio.image} alt={`Image ${index}`} />
            <Card.Body className='d-flex flex-column justify-content-between'>
              <Card.Title className='text-center pe-none'>{portfolio.title}</Card.Title>
              <Row fluid className='mt-2 mb-3 p-0'>
                <Col className='text-center'>
                  <p className='fw-bold text-uppercase m-0 pe-none'>Technology</p>
                  {portfolio.technology != null ? 
                    (
                      portfolio.technology.map((tech, index) => (
                        <Badge className={`w-25 h-50 m-1 cs-tc-${currTheme}`} bg="light">
                          {
                            tech === "html" ? 
                              <PiFileHtmlDuotone className='w-100 h-100' /> :
                            tech === "css" ? 
                              <PiFileCssDuotone className='w-100 h-100' /> :
                            tech === "react" ? 
                              <FaReact className='w-100 h-100' /> :
                            tech === "bootstrap" ? 
                              <FaBootstrap className='w-100 h-100' /> :
                            tech === "javascript" ? 
                              <RiJavascriptFill className='w-100 h-100' /> :
                            ''
                          }
                        </Badge> 
                      ))
                    ) : ''
                  }
                </Col>
                <Col className='text-center'>
                  <p className='fw-bold text-uppercase m-0 pe-none'>Version</p>
                  {portfolio.technology != null ? 
                    (
                      portfolio.version.map((ver, index) => (
                        <Badge className={`w-25 h-50 m-1 cs-tc-${currTheme}`} bg="light">
                          {
                            ver === "desktop" ? 
                              <PiDesktopTower className='w-100 h-100' /> :
                            ver === "mobile" ? 
                              <PiDeviceMobileThin className='w-100 h-100' /> :
                            ''
                          }
                        </Badge> 
                      ))
                    ) : ''
                  }
                </Col>
              </Row>
              <Row fluid className='ps-3 pe-3 justify-content-between'>
                <Button variant="custom" className={`cs-w cs-btn-${currTheme}`} href={portfolio.repasitory} target='_blank' rel="noopener noreferrer"><FaGithub className='mb-1' /></Button>
                <Button variant="custom" className={`cs-w cs-btn-${currTheme}`} href={portfolio.link} target='_blank' rel="noopener noreferrer"><FaExternalLinkAlt className='mb-1' /></Button>
              </Row>
            </Card.Body>
          </Card>
        ))}
      </Container>
      <Container fluid className={`mt-5 cs-bg-el-${currTheme} shadow-sm p-4 d-flex flex-column flex-sm-row justify-content-end`}>
        <Button variant="custom" className={`m-2 cs-btn-${currTheme}`} href='https://www.linkedin.com/in/sergiy-but-623426159/' target='_blank'>
          <FaLinkedin size="1.5em" /> Linkedin
        </Button>
        <Button variant="custom" className={`m-2 cs-btn-${currTheme}`} href='https://github.com/MrSeager' target='_blank'>
          <FaGithub size="1.5em" /> Github
        </Button>
        <Button variant="custom" className={`m-2 cs-btn-${currTheme}`} href='https://www.deviantart.com/mrseager29' target='_blank'>
          <FaDeviantart size="1.5em" /> Deviantart
        </Button>
        <Button variant="custom" className={`m-2 cs-btn-${currTheme}`} href='https://www.youtube.com/channel/UCQgY4AFsqQWgxOvdeNGs-cQ' target='_blank'>
          <FaYoutube size="1.5em" /> YouTube
        </Button>
      </Container>
    </main>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
