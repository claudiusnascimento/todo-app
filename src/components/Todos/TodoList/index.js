import React, { useState, useEffect } from 'react';
import './styles.css'

import cuid from 'cuid';

import TodoItem from './../TodoItem';
import Header from './../../../structure/Header'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


const LOCAL_STORAGE_TODOS_KEY = 'todosapp.todos';

function TodoList() {

    let [todos, setTodos] = useState([]);

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TODOS_KEY));
        if(storedTodos) setTodos(storedTodos);
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_TODOS_KEY, JSON.stringify(todos));
    }, [todos])

    let _todos = todos.filter(todo => {
        return !todo.completed && !todo.deleted;
    });

    let _completeds = todos.filter(todo => {
        return todo.completed && !todo.deleted;
    });

    let _deleteds = todos.filter(todo => {
        return todo.deleted;
    });

    function actionTodo(id, action) {
        
        const allTodos = [...todos];
        const todo = allTodos.find(todo => todo.id === id);

        if(!todo) return;

        if(action === 'complete') {
            todo.completed = true;
            toast.success('Todo mark as completed!');
        }
            
        
        if(action === 'delete') {
            todo.deleted = true;
            toast.warning('Todo mark as deleted!');
        }
            

        if(action === 'todo') {
            todo.completed = false;
            todo.deleted = false;
            toast.info('Todo mark as todo!');
        }

        if(action === 'restore') {
            todo.deleted = false;
            toast.success('Todo restored!');
        }

        if(action === 'f-delete') {
            deleteTodo(id);
        } else {

            setTodos(allTodos);
        }
        
    }

    function addTodo(text) {
        
        const allTodos = [...todos, {
            id: cuid(),
            title: text,
            completed: false,
            deleted: false
        }];

        setTodos(allTodos);
        toast.success('Todo added!');
    }

    function deleteTodo(id) {
        confirmAlert({
            title: 'Delete todo forever',
            message: 'Are you sure to do this.',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {

                    const filtered = todos.filter(todo => {
                        return todo.id !== id;
                    });

                    setTodos(filtered);
                    toast.success('Todo deletado!');
                }
              },
              {
                label: 'No',
                onClick: () => {}
              }
            ]
        });
    }

    return (

        <>
            <Header addTodo={addTodo}/>

            <div className="container">

                <div className="row">

                    <div className="col col-xs-12">
                        <div className="section-todo section-create">
                            <h3>Todos</h3>

                            <div className="todos">
                                {_todos.map(todo => (
                                    <TodoItem 
                                        key={todo.id} 
                                        todo={todo} 
                                        actionTodo={actionTodo} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col col-xs-12">
                        <div className="section-todo section-completeds">
                            <h3>Completed Todos</h3>

                            <div className="todos">
                                {_completeds.map(todo => (
                                    <TodoItem 
                                        key={todo.id} 
                                        todo={todo} 
                                        actionTodo={actionTodo} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col col-xs-12">
                        <div className="section-todo section-deleteds">
                            <h3>Deleted Todos</h3>
                            <div className="todos">
                                {_deleteds.map(todo => (
                                    <TodoItem 
                                        key={todo.id} 
                                        todo={todo} 
                                        actionTodo={actionTodo} />
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <ToastContainer />
        </>
    )
}

export default TodoList