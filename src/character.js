import React, { Component } from 'react';
import Nav from './nav';
import Image from 'react-bootstrap/Image';
import Characters from './characters.json';
import { Container, Row, Col } from 'react-bootstrap';


class Character extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickCount: 0
        }

    }

    // check if image is clicked
    handleClick = (id) => {

        this.setState((prevState, props) => ({
            clickCount: prevState.clickCount
        }), () => {
            console.log(this.state.clickCount)
            if (this.state.clickCount >= 2) {
                console.log("try again")
            }

        }
        )
    }
    render() {
        return (
            <>
                <Nav />
                <Container>
                        <Row>
                            <Col xs={4} md={11}>
                {Characters.map((character) => {
                    return <Image width={250}  src={character.image} key={character.id} rounded />
                            })}
                            </Col>
                        </Row>
                    </Container>

            </>
        )
    }
}
export default Character;

