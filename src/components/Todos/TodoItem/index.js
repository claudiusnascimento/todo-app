import React from 'react';

import './styles.css'

function TodoItem({todo, actionTodo}) {

    const { id, title, completed, deleted } =  todo;
    const className = "btn btn-success btn-action buttonMarkAsCompleted";

    function handleCompleteTodo(action) {
        actionTodo(id, action);
    }

    return (
       <>
            <p className="todo-item">
                <span>{ title }</span>

                { ! completed && ! deleted && <button 
                    className={className} 
                    onClick={() => handleCompleteTodo('complete')}>
                    DONE
                </button> }

                { completed && ! deleted && <button 
                    className="btn btn-info btn-action buttonMarkAsCompleted"
                    onClick={() => handleCompleteTodo('todo')}>
                    TODO
                </button> }

                { ! deleted &&
                    <button className="btn btn-secondary btn-action buttonMarkAsDeleted"
                    onClick={() => handleCompleteTodo('delete')}>
                    DEL
                </button> }

                { deleted && <>
                    <button className="btn btn-warning btn-action buttonMarkAsDeleted"
                    onClick={() => handleCompleteTodo('restore')}>
                    RESTORE
                    </button>
                    <button className="btn btn-danger btn-action buttonMarkAsDeleted"
                        onClick={() => handleCompleteTodo('f-delete')}>
                        X
                    </button> </>
                }
                
            </p>
       </>
    )
}

export default TodoItem