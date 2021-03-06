import React from "react";
import { Link } from 'react-router-dom'

import NavBar from "../components/NavBar/NavBar";

import Recommended from "../components/Recommended";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import {
  navBarData,
  recommendedData
} from './NavFullRecommended/data'

class App extends React.Component {
    render = () => (
        <div>
            <Container>
                <Row>
                    <Col xs={12}>
                        <NavBar items={navBarData} />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="RecommendedTitle">Рекомендуемые блюда</div>
                    </Col>
                    <Col xs={12}>
                        <Recommended dishes={recommendedData} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;