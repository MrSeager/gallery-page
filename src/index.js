import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Card, Image } from 'react-bootstrap';
import axios from 'axios';

const images = require.context('./images', false, /\.(png|jpe?g|svg)$/);
const imageList = images.keys().map(image => images(image));

const MainPage = () => {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    axios.get('/data.json').then((response) => {
      setPortfolios(response.data.portfolio);

    });
  }, []);

  return(
    <Container className='d-flex flex-wrap'>
      {imageList.map((image, index) => (
        <Card className='flex-item'>
          <Card.Img fluid key={index} src={image} alt={`Image ${index}`} />
          <Card.ImgOverlay>
            <Card.Title className='text-white'>{}</Card.Title>
            <Card.Text className='text-white'>{}</Card.Text>
          </Card.ImgOverlay>
        </Card>
      ))}
      <Container>
        {portfolios.map((portfolio) => (
            <p key={portfolio.id}>{portfolio.title}</p>
          ))}
      </Container>
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
