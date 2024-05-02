import React, { Component, Fragment } from 'react';
import '../../asset/css/style.css';
import {Container, Row, Col,Button} from 'react-bootstrap'


class HeaderCommon extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid className='HeaderCommonContainer p-0'>
                    <div>
                        <Container fluid className='CommonOverlay'>
                            <Row>
                                <Col className='text-center'>
                                <h3 className='ServiceHeaderTop'>{this.props.pagetitle}</h3>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default HeaderCommon;