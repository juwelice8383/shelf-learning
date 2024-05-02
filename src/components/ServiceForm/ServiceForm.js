import React, { Component, Fragment } from 'react';
import '../../asset/css/style.css';
import { Container, Row, Col, Button, Form   } from 'react-bootstrap';


class ServiceForm extends Component {
    render() {
        return (
            <Fragment>
                <Container className='ServiceFormContainer py-5'>
                    <Row>
                        <Col>
                        <h4>Quick Connect</h4>

                        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text"/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" />
        <Form.Label >Messages</Form.Label>
        <Form.Control className='messageBox' type="Text" />
        
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

                        </Col>
                        <Col>
                         <h4>Quick Connect</h4>
                         <p>#79/6 Padma Residential Aria, 3<sup>rd</sup> Floor Front Side, Rajshahi</p>
                         <p>Email: juwelice8383@gmail.com</p>
                         <p>Phone: +8801707350634</p>
                        </Col>
                    </Row>
                </Container>
                
            </Fragment>
        );
    }
}

export default ServiceForm;