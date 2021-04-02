import React from 'react'
import { Row, Col, Container, Button} from 'react-bootstrap'


const ToDoHeader = ({toggle, showAdd}) => {


    return (
        <Container>
            <Row style={{paddingTop: 5}}>
                <Col md={{span:6, offset:3}}>
                    <h3> ToDo List</h3>
                </Col>
                <Col >
                    <Button onClick={toggle} variant={(showAdd === true) ? "danger" : "success"}>
                    {(showAdd === true) ? "Hide" : "Add"}
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default ToDoHeader
