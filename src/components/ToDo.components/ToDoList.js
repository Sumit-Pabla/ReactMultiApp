import React, {useState} from 'react'
import {Row, Col, Card, Button} from 'react-bootstrap'


const ToDoList = ({list, showAdd, addTask, newTask, updateInput, tasks, onDelete, complete}) => {
    const [textToDo, setTextToDo] = useState('')
    const [idToDo, setIdToDo] = useState('')

    if(showAdd){
    return (
        <> 
            <Card.Footer style={{padding:10}}>
                <input text="New" onChange={(e) => {
                    setTextToDo(e.target.value)
                }} placeholder="New ToDo Item"/>
                <input text="ID" placeholder="ID" style={{marginLeft: "50px", width:"10%"}}
                onChange={(e) => {
                    setIdToDo(e.target.value)
                }}/>

                <Button variant="secondary" onClick={() => {
                    if(!textToDo || !idToDo){
                        alert("Enter Values for both fields.")
                    }
                    else{
                        const newTask = {text:textToDo,id:idToDo}
                        addTask(newTask)
                        setIdToDo('')
                        setTextToDo('')
                    }
                }} style={{marginLeft: "50px"}}>Add</Button>
            </Card.Footer>  

            
            {list.map((e) => (
            <Row style={{padding:6, marginTop:10, cursor:"pointer"}} className='border-bottom'  onDoubleClick={() =>{
                complete(e.id)
            }}>
            <Col md={{span:2}}> {`${e.id}`} </Col>
            <Col md={{span:4, offset:2}}> {e.complete ? <del>{e.text}</del> : e.text} </Col>
            <Col md={{span:2, offset:2}}> 
            <Button variant="outline-danger"  style={{opacity:"0.5"}} onClick={() => {
                onDelete(e.id)
            }}>
                X
            </Button>
            </Col>

            </Row>
            
            ))}

        </>
    )}

    return(
        <> 
            {list.map((e) => (
            <Col style={{padding:8}}> {`id: ${e.id} message: ${e.text}`} </Col>
            )
            )} 
        </>
    )}
export default ToDoList
