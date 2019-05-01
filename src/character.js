import React, { Component } from 'react';
import Nav from './nav';
import Image from 'react-bootstrap/Image';
import Characters from './characters.json';
import { Container, Row, Col } from 'react-bootstrap';
import Shuffle from 'react-shuffle';


class Character extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isclicked: false

        }

    }

    handleClick = ((event) => {
        let click = event.target.id
        console.log(click)
    })
    render() {
        return (
            <>
                <Nav />
                <Container>
                        <Row>
                            <Col xs={4} md={11}>
                {Characters.map((character) => {
                    return <Image onClick= {this.handleClick}
                 id={character.id} width={250}  src={character.image} key={character.id} rounded />
                            })}
                            </Col>
                        </Row>
                    </Container>

            </>
        )
    }
}
export default Character;

