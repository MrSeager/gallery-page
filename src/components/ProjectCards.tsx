import React, { useState, useEffect, FC } from 'react';
import '../index.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Card, Button, Badge, Row, Col } from 'react-bootstrap';
//Axios
import axios from 'axios';
//Icons
import { FaGithub, FaExternalLinkAlt, FaReact, FaBootstrap } from 'react-icons/fa';
import { PiFileHtmlDuotone, PiFileCssDuotone, PiDesktopTower, PiDeviceMobileThin } from "react-icons/pi";
import { RiJavascriptFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
//Animation
import AOS from 'aos';
import 'aos/dist/aos.css';

type ProjectCardsProps = {
  currTheme: string;
  selectedTechnology: string;
}

interface PortfolioItemType {
  id: number;
  title: string;
  image: string;
  technology: string[];
  version: string[];
  repasitory: string;
  link: string;
}

const ProjectCards: FC<ProjectCardsProps> = ({ currTheme, selectedTechnology }) => {
    const [portfolio, setPortfolio] = useState<PortfolioItemType[]>([]);

    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/MrSeager/gallery-page/main/src/data.json').then((response) => {
          setPortfolio(response.data.portfolio);
        });
      }, []);

    const handleBadgeTechIcon = (tech) => {
        switch (tech) {
            case "html":
                return <PiFileHtmlDuotone className='w-100 h-100' />;
            case "css":
                return <PiFileCssDuotone className='w-100 h-100' />;
            case "react":
                return <FaReact className='w-100 h-100' />;
            case "bootstrap":
                return <FaBootstrap className='w-100 h-100' />;
            case "javascript":
                return <RiJavascriptFill className='w-100 h-100' />;
            case "typescript":
                return <SiTypescript className='w-100 h-100' />;
            default:
                return null; // Handle other cases or return a default icon
        }
    };

    const handleBadgeVerIcon = (ver) => {
        switch (ver) {
            case "desktop":
                return <PiDesktopTower className='w-100 h-100' />;
            case "mobile":
                return <PiDeviceMobileThin className='w-100 h-100' />;
            default:
                return null;
        }
    };

    AOS.init({
      debounceDelay: 50,
      throttleDelay: 99,
    });

    return (
        <Container fluid className='px-lg-5'>
          <Row className='mx-lg-5'>
          {portfolio
            .filter((portfolio) => selectedTechnology === '' || portfolio.technology.includes(selectedTechnology))
            .map((portfolio, index) => (
            <Col data-aos='fade-up' lg={4} md={6} sm={12} className='p-3'>
              <Card className={`h-100 w-100 cs-bg-el-${currTheme} text-white shadow rounded-2 cs-card`}>
                <Card.Img src={portfolio.image} alt={`Image ${index}`} className='cs-img-filter' />
                <Card.Body className='d-flex flex-column justify-content-between'>
                  <Card.Title className='text-center pe-none'>{portfolio.id}. {portfolio.title}</Card.Title>
                  <Row fluid className='mt-2 mb-3 p-0'>
                    <Col className='text-center'>
                      <p className='fw-bold text-uppercase m-0 pe-none'>Technology</p>
                      {portfolio.technology != null ? 
                        (
                          portfolio.technology.map((tech, index) => (
                            <Badge className={`cs-is m-1 cs-tc-${currTheme}`} bg="light">
                              {handleBadgeTechIcon(tech)}
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
                            <Badge className={`cs-is m-1 cs-tc-${currTheme}`} bg="light">
                              {handleBadgeVerIcon(ver)}
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
            </Col>
          ))}
        </Row>
      </Container>
    );
}

export default ProjectCards;