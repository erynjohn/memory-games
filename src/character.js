import React, { Component } from 'react';
import Nav from './nav';
import Image from 'react-bootstrap/Image'
import { Container, Row, Col } from 'react-bootstrap';

class Character extends Component {
    render() {
        return (
            <div>
            <style>{'body { background-color: rgba(0,0,0, 0.1);}'}</style>
                <Nav />
                <>
                    <Container>
                        <Row>
                            <Col xs={3} md={4}>
                                <Image  style={{width: 171, height: 180 }} src="http://annawrites.com/blog/wp-content/uploads/2012/02/family-guy.jpg" roundedCircle />
                            </Col>
                            <Col xs={3} md={4}>
                                <Image style={{ width: 171, height: 180 }} src="http://annawrites.com/blog/wp-content/uploads/2012/02/family-guy.jpg" roundedCircle />
                            </Col>
                            <Col xs={3} md={4}>
                                <Image style={{ width: 171, height: 180 }} src="http://annawrites.com/blog/wp-content/uploads/2012/02/family-guy.jpg" roundedCircle />
                            </Col>

                        </Row>
                        <Row>
                            <Col xs={3} md={4}>
                                <Image style={{ width: 171, height: 180 }} src="http://annawrites.com/blog/wp-content/uploads/2012/02/family-guy.jpg" roundedCircle />
                            </Col>
                            <Col xs={3} md={4}>
                                <Image style={{ width: 171, height: 180 }} src="http://annawrites.com/blog/wp-content/uploads/2012/02/family-guy.jpg" roundedCircle />
                            </Col>
                            <Col xs={3} md={4}>
                                <Image style={{ width: 171, height: 180 }} src="http://annawrites.com/blog/wp-content/uploads/2012/02/family-guy.jpg" roundedCircle />
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={3} md={4}>
                                <Image style={{ width: 171, height: 180 }} src="http://annawrites.com/blog/wp-content/uploads/2012/02/family-guy.jpg" roundedCircle />
                            </Col>
                            <Col xs={3} md={4}>
                                <Image style={{ width: 171, height: 180 }} src="http://annawrites.com/blog/wp-content/uploads/2012/02/family-guy.jpg" roundedCircle />
                            </Col>
                            <Col xs={3} md={4}>
                                <Image style={{ width: 171, height: 180 }} src="http://annawrites.com/blog/wp-content/uploads/2012/02/family-guy.jpg" roundedCircle />
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={3} md={4}>
                                <Image style={{ width: 171, height: 180 }} src="http://annawrites.com/blog/wp-content/uploads/2012/02/family-guy.jpg" roundedCircle />
                            </Col>
                            <Col xs={3} md={4}>
                                <Image style={{ width: 171, height: 180 }} src="http://annawrites.com/blog/wp-content/uploads/2012/02/family-guy.jpg" roundedCircle />
                            </Col>
                            <Col xs={3} md={4}>
                                <Image style={{ width: 171, height: 180 }} src="http://annawrites.com/blog/wp-content/uploads/2012/02/family-guy.jpg" roundedCircle />
                            </Col>
                        </Row>


                    </Container>
                </>
            </div>
        )
    }
}
export default Character;