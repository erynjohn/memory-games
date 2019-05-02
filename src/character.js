import React, { Component } from 'react';
import Nav from './nav';
import Image from 'react-bootstrap/Image';
import Characters from './characters.json';
import { Container, Row, Col } from 'react-bootstrap';


class Character extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            current: 0
        }

    }

    handleClick = ((event) => {
        let click = event.target.id
        console.log(click)
        this.setState((prevState) => {
            return { current: click }
        })
        console.log(this.state.current)
        if (this.state.current === click) {
            Characters.sort(() => {
                return 0.5 - Math.random() 
            })
            this.setState({score: 0})
        } else {
            Characters.sort(() => {
                return 0.5 - Math.random() 
            })
            this.setState({score: this.state.score +1})
        }
    })

    render() {
        return (
            <>
                <Nav />
                <div style={{ backgroundColor: 'rgb(219,217,209, 0.5)' }}>
                    <h2>Score: {this.state.score}</h2>
                </div>
                <Container>
                    <Row>
                        <Col xs={4} md={11}>
                            {Characters.map((character) => {
                                return <Image onClick={this.handleClick}
                                    id={character.id} width={250} src={character.image} key={character.id} rounded />
                            })}
                        </Col>
                    </Row>
                </Container>

            </>
        )
    }
}
export default Character;

