import { Container } from 'postcss';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import RightSideNav from '../components/RightSideNav/RightSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Row>
                <Col>
                    <Outlet></Outlet>
                </Col>
                <Col>
                    <RightSideNav></RightSideNav>
                </Col>
            </Row>
        </div>
    );
};

export default Main;