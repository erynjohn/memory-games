import React, { Component } from 'react';
import Nav from './nav';
import Image from 'react-bootstrap/Image'
import { Container, Row, Col } from 'react-bootstrap';
import './shake.css';


class Character extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false,
            addClass: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    // check if image is clicked
    handleClick() {
        this.setState(prevState => ({
            isClicked: !prevState.isClicked 

        }))
        console.log(this)
    }
    render() {
        return (
            <div>
            <style>{'body { background-color: rgba(0,0,0, 0.1);}'}</style>
                <Nav />
                <>
                    <Container>
                        <Row>
                            <Col xs={3} md={4}>
                                <Image onClick={this.handleClick} className='img' src={process.env.PUBLIC_URL + '/images/img1.jpg'} roundedCircle />
                            </Col>
                            <Col xs={3} md={4}>
                            <Image onClick={this.handleClick} className='img' src={process.env.PUBLIC_URL + '/images/img2.jpg'} roundedCircle />
                            </Col>
                            <Col xs={3} md={4}>
                            <Image onClick={this.handleClick} className='img' src={process.env.PUBLIC_URL + '/images/img3.jpg'} roundedCircle />
                            </Col>

                        </Row>
                        <Row>
                            <Col xs={3} md={4}>
                            <Image onClick={this.handleClick} className='img' src={process.env.PUBLIC_URL + '/images/img4.jpg'} roundedCircle />
                            </Col>
                            <Col xs={3} md={4}>
                            <Image onClick={this.handleClick} className='img' src={process.env.PUBLIC_URL + '/images/img5.jpg'} roundedCircle />
                            </Col>
                            <Col xs={3} md={4}>
                            <Image onClick={this.handleClick} className='img' src={process.env.PUBLIC_URL + '/images/img6.jpg'} roundedCircle />
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={3} md={4}>
                            <Image onClick={this.handleClick} className='img' src={process.env.PUBLIC_URL + '/images/img7.jpg'} roundedCircle />
                            </Col>
                            <Col xs={3} md={4}>
                            <Image onClick={this.handleClick} className='img' src={process.env.PUBLIC_URL + '/images/img8.jpg'} roundedCircle />
                            </Col>
                            <Col xs={3} md={4}>
                            <Image onClick={this.handleClick} className='img' src={process.env.PUBLIC_URL + '/images/img9.jpg'} roundedCircle />
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={3} md={4}>
                                <Image onClick={this.handleClick} className='img' src={process.env.PUBLIC_URL + '/images/img10.jpg'} roundedCircle />
                            </Col>
                            <Col xs={3} md={4}>
                            <Image onClick={this.handleClick} className='img' src={process.env.PUBLIC_URL + '/images/img11.jpg'} roundedCircle />
                            </Col>
                            <Col xs={3} md={4}>
                            <Image onClick={this.handleClick} className='img' src={process.env.PUBLIC_URL + '/images/img12.jpg'} roundedCircle />
                            </Col>
                        </Row>


                    </Container>
                </>
            </div>
        )
    }
}
export default Character;