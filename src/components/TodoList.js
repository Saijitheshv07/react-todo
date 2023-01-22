import React from 'react';
import Todo from './Todo';

function TodoList({todoList, setTodoList}) {
    return (
        <div>
            {
                todoList.map((todoItem) => (
                    <Todo setTodoList={setTodoList} todoList={todoList} key={todoItem.id} todoItem={todoItem}></Todo>
                ))
            }
        </div>
    );
}

export default TodoList;