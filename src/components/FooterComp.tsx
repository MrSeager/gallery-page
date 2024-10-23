import React, { FC } from 'react';
import '../index.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Card, Button, Badge, Row, Col } from 'react-bootstrap';
//Animation
import AOS from 'aos';
import 'aos/dist/aos.css';
//Icons
import { FaLinkedin, FaGithub, FaDeviantart, FaYoutube } from 'react-icons/fa';

type FooterCompProps = {
    currTheme: string;
}

const FooterComp: FC<FooterCompProps> = ({ currTheme }) => {
    return (
        <Container fluid className={`mt-5 cs-bg-el-${currTheme} shadow-sm p-4 d-flex flex-column flex-sm-row justify-content-end`}>
            <Button variant="custom" className={`m-2 cs-btn-${currTheme}`} href='https://www.linkedin.com/in/sergiy-b-623426159/' target='_blank'>
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
    );
};

export default FooterComp;