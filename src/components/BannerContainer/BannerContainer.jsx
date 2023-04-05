import React from 'react'
import Figure from 'react-bootstrap/Figure'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const BannerContainer = () => {
  return (
    <Container fluid="md">
        <Row className="justify-content-md-center mt-4">
            <Col md="auto">
        <Figure>
        <Figure.Image
        width={1300}
        height={100}
        alt="171x180"
        src="https://www.dementho.com/modules/ps_imageslider/images/2d321805e3cc9796bbc45464e31f57ca43184f56_CARRUSELDEMENTHO12-03.png"
        />
        </Figure>
        </Col>
        </Row>
    </Container>
  )
}
