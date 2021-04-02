import React, {useState} from 'react'
import { Card, Container} from 'react-bootstrap'
import ToDoHeader from '../components/ToDo.components/ToDoHeader'
import ToDoList from '../components/ToDo.components/ToDoList'



const ToDo = () => {
    const[tasks, setTasks] = useState([{id:"1", text:"Get groceries", complete:false}, {id:2, text:'Clean Car', complete:false}, {id:3, text:'Homework', complete:true}, {id:4, text:'Walk dogs', complete:false}])
    const[newTask, setNewTask] = useState([{id:""}, {text:""}])
    const[showAdd, setShowAdd] = useState(true)

const toggle = () => {
    setShowAdd(!showAdd)
}

const addTask = (newTask) => { 
    setTasks([newTask, ...tasks])
}

const updateInput = (item, idNum) => {
        setNewTask(idNum, item);
}

const onDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
}

const complete = (id) => {
    setTasks(tasks.map((task) => {
        if(task.id === id){
            const newTask = {...task, complete:!task.complete}
            console.log(newTask)
            return newTask
        }
        else{
            return task
        }
    }))
        
}

    return (
        <Container>
            
            <Card style={{ width: '70%', marginLeft:"15%"}} className="text-center">
            <Card.Header>
                <ToDoHeader toggle={toggle} showAdd={showAdd}/>
            </Card.Header>
            
            <Card.Title>
                <ToDoList list={tasks} showAdd={showAdd} addTask={addTask} newTask={newTask} updateInput={updateInput} tasks={tasks} onDelete={onDelete} complete={complete}/>
            </Card.Title>
                
            <Card.Footer>
                &copy; Sumit Pabla
            </Card.Footer>
            
            </Card>
        </Container>
    )
}

export default ToDo
