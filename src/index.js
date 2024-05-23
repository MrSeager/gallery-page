import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import autoAnimate from '@formkit/auto-animate';
import { Container, Card, Nav, Button, Row, Col, Badge } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaDeviantart, FaYoutube, FaExternalLinkAlt, FaReact, FaBootstrap } from 'react-icons/fa';
import { PiFileHtmlDuotone, PiFileCssDuotone, PiDesktopTower, PiDeviceMobileThin } from "react-icons/pi";
import { RiJavascriptFill } from "react-icons/ri";
import axios from 'axios';

const MainPage = () => {
  const [portfolio, setPortfolio] = useState([]);
  const parentRef = useRef(null);

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

  return(
    <main className='bg-light'>
      <Nav className='bg-dark mb-5 text-light'>
        <h1 className='display-2 text-center m-5 w-100'>Mr. Seager's Portfolio</h1>
      </Nav>
      <Container className='cs-grid' ref={parentRef}>
        {portfolio.map((portfolio, index) => (
          <Card className='m-3 bg-dark text-light'>
            <Card.Img fluid src={portfolio.image} alt={`Image ${index}`} />
            <Card.Body className='d-flex flex-column justify-content-between'>
              <Card.Title className='text-center'>{portfolio.title}</Card.Title>
              {/*<Card.Text className='text-light'>{portfolio.discription}</Card.Text>*/}
              <Row fluid className='mt-2 mb-3 p-0'>
                <Col className='text-center'>
                  <p className='fw-bold text-uppercase m-0'>Technology</p>
                  {portfolio.technology != null ? 
                    (
                      portfolio.technology.map((tech, index) => (
                        <Badge className='w-25 h-50 m-1' bg="light" text="dark">
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
                  <p className='fw-bold text-uppercase m-0'>Version</p>
                  {portfolio.technology != null ? 
                    (
                      portfolio.version.map((ver, index) => (
                        <Badge className='w-25 h-50 m-1' bg="light" text="dark">
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
                <Button variant="outline-light" className='cs-w' href={portfolio.link} target='_blank' rel="noopener noreferrer"><FaExternalLinkAlt className='mb-1' /></Button>
                <Button variant="outline-light" className='cs-w' href={portfolio.repasitory} target='_blank' rel="noopener noreferrer"><FaGithub className='mb-1' /></Button>
              </Row>
            </Card.Body>
          </Card>
        ))}
      </Container>
      <Container fluid className='mt-5 bg-dark p-4 d-flex flex-column flex-sm-row justify-content-end'>
        <Button variant="outline-light" className="m-2" href='https://www.linkedin.com/in/sergiy-but-623426159/' target='_blank'>
          <FaLinkedin size="1.5em" /> Linkedin
        </Button>
        <Button variant="outline-light" className="m-2" href='https://github.com/MrSeager' target='_blank'>
          <FaGithub size="1.5em" /> Github
        </Button>
        <Button variant="outline-light" className="m-2" href='https://www.deviantart.com/mrseager29' target='_blank'>
          <FaDeviantart size="1.5em" /> Deviantart
        </Button>
        <Button variant="outline-light" className="m-2" href='https://www.youtube.com/channel/UCQgY4AFsqQWgxOvdeNGs-cQ' target='_blank'>
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
