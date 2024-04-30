import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import autoAnimate from '@formkit/auto-animate';
import { Container, Card, Nav, Button } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaDeviantart, FaYoutube } from 'react-icons/fa';
import axios from 'axios';

const images = require.context('./images', false, /\.(png|jpe?g|svg)$/);
const imageList = images.keys().map(image => images(image));

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
          <Card className='m-3 bg-dark'>
            <Card.Img fluid src={imageList[index]} alt={`Image ${index}`} />
            <Card.Body className='d-flex flex-column justify-content-between'>
              <Card.Title className='text-light text-center'>{portfolio.title}</Card.Title>
              <Card.Text className='text-light'>{portfolio.discription}</Card.Text>
              <Button variant="outline-light" className='' href={portfolio.link} target='_blank' rel="noopener noreferrer">Link</Button>
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
