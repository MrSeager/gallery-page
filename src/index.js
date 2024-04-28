import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Card, Image, Button } from 'react-bootstrap';
import axios from 'axios';

const images = require.context('./images', false, /\.(png|jpe?g|svg)$/);
const imageList = images.keys().map(image => images(image));

const MainPage = () => {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/MrSeager/gallery-page/main/src/data.json').then((response) => {
      setPortfolios(response.data.portfolio);

    });
  }, []);

  return(
    <Container className='d-flex flex-wrap'>
      {portfolios.map((portfolio, index) => (
        <Card className='flex-item m-4'>
          <Card.Img fluid src={imageList[index]} alt={`Image ${index}`} />
          <Card.ImgOverlay>
            <Card.Title className='text-white'>{portfolio.title}</Card.Title>
            <Card.Text className='text-white'>{portfolio.discription}</Card.Text>
            <Button src={portfolio.link}>Link</Button>
          </Card.ImgOverlay>
        </Card>
      ))}
    </Container>
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
