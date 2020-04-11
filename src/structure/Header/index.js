import React, { useRef } from 'react';

import './styles.css'

function Header({addTodo}) {

    const todoTextRef = useRef();

    function handleAddTodo() {
        
        const text = todoTextRef.current.value;
        if(text === '') return;

        addTodo(text);

        todoTextRef.current.value = null;
    }

    return (
        <>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 border-right-thin">
                            <h1 className="app-name color-g1">TODO APP</h1>
                        </div>
                        <div className="col-sm-6 padd-lr-none">
                            <div className="add-todo">
                                <input 
                                ref={todoTextRef} 
                                type="text"/>
                            </div>
                        </div>
                        <div className="col-sm-3 padd-lr-none">
                            <button 
                                className="btn btn-add-todo" 
                                onClick={() => handleAddTodo()}>
                                ADD
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
        
    );
}

export default Header;
