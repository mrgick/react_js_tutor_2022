import { Button, Checkbox, List, Col, Input } from 'antd';
import React, {Component } from 'react';

export default class Todo extends Component {

    state = {
        todoList: [],
        curentPage : 1,
        perPage : 10,
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(res => this.setState({todoList : res}))
        
    }

    
    handelerTodoChecked = (todoID) =>{
        let todo = JSON.parse(JSON.stringify(this.state.todoList))

        todo = todo.filter((item)=>{
            if(item.id == todoID){
                item.completed = !item.completed
            }
            return item;
        })
        this.setState({todoList : todo})
    }

    handlerDeleteTodo = (todoID) => {
        let todo = JSON.parse(JSON.stringify(this.state.todoList))

        todo = todo.filter((item)=>{
            if(item.id != todoID) return item;
            
        })
        this.setState({todoList : todo})
    }

    handlerAddToTodo =(e) => {
        console.log(e)
        let defVariable = [{id: Math.random(), title:e.target.value, completed: false}]
        this.setState({todoList : [...this.state.todoList, ...defVariable] })
    }
    render(){
        const {todoList} = this.state;
        
        return(
            <>
                <Col span={8} style={{margin: '0 auto'}}>
                    <h3>My todo list</h3>
                    <List>
                        <Input placeholder='Добавить todo в список' onPressEnter={(e) => this.handlerAddToTodo(e)}/>
                        {todoList.map((item,index)=>{
                            return(
                                    
                                    <List.Item key={index} style={{listStyle: 'decimal', textDecoration : item.completed ? 'line-through' : 'none'}} >
                                        <Checkbox onChange={() => this.handelerTodoChecked(item.id) } checked={item.completed ? true : false }/>
                                        {item.title}
                                        <Button onClick={()=> this.handlerDeleteTodo(item.id) }>Удалить</Button>
                                    </List.Item>
                            )
                        })}
                    </List>
                </Col>
            </>
        )
    }
}