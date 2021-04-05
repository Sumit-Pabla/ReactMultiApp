import React, {useState} from 'react'
import {Container, Col, Row, Button, Form, Carousel} from 'react-bootstrap'

function Dictionary() {
    const [counter, setCounter] = useState(1)  
    const [search, setSearch] = useState("")   
    const [definitions, setDefinitions] = useState([])

    const getTerm = async () => {
        console.log(search)
        if(search){
            const newTerm = await fetch(`https://lingua-robot.p.rapidapi.com/language/v1/entries/en/${search}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "23d7a486d3mshac6d41c225d9efap112cbcjsnde4957d30613",
                    "x-rapidapi-host": "lingua-robot.p.rapidapi.com"
                }
            })
            .then(response => 
                response.json()
            )
            .then((data) =>{
                return data
            })
            .catch(err => {
                console.error(err);
            });
            const allDef = [];
            newTerm?.entries[0]?.lexemes[0]?.senses.map(sense => {

                

                allDef.push(sense.definition)
                
            })
            setCounter(counter+1)
            setDefinitions([...definitions, ...allDef])
            console.log(`${definitions}`)
    }
    else{
        alert("Enter a term to search for")
    }
}

    return (
        <Container style={{ paddingTop:"10%", minHeight:"90vh"}}>
            <Row>
            <Col md={{span:12, offset:4}} style={{paddingBottom:30}} onClick={() => {
                setDefinitions([])
            }}>
                    <h2> Dictionary API</h2>
                </Col>
                <Col md={{span:6, offset:2}}>
                    <Form.Control type="text" placeholder={(counter===1)? "Enter Term" :(counter<6)? `You have ${6 - counter} searches left`: "No more searches allowed"} 
                    style={(counter<6)?{width:"90%"}:{width:"90%"}}
                     
                    onChange={(e) => {
                        setSearch(e.target.value)
                    }}/>
                </Col>
                <Col md={{span:3}}>


                {
                    (counter<6) ? 
                    <Button onClick={getTerm} variant="secondary"> Search </Button>
                    : 
                    <Button onClick={getTerm} variant="secondary" disabled> Search </Button>
                }
                   
                </Col>

                {  definitions.length<1 ? 
                ""
                :
                (<Carousel style={{backgroundColor:"lightgray", height:"50vh", marginTop:"5vh", width:"100vh"}}>
                    {definitions.map(def => {
                        return(
                            <Carousel.Item style={{paddingTop:"15%", paddingLeft:"20%",paddingRight:"20%", paddingBottom:"20%"}}>
                               <h3>{def}</h3>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>)
                }
                
       
            </Row>
        </Container>
    )
}

export default Dictionary
