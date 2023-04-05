import React from 'react'
import Figure from 'react-bootstrap/Figure'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const BannerFooter = () => {
  return (
    <Container fluid="md">
        <Row className="justify-content-md-center mt-4">
            <Col md="auto">
        <Figure>
        <Figure.Image
        width={1300}
        height={100}
        alt="171x180"
        src="https://www.dementho.com/modules/ps_banner/img/03761102f977de52041bbdcd2a2d12a9.png"
        />
        </Figure>
        </Col>
        </Row>
    </Container>
  )
}