import styles from "../style.module.css"
import shortid from "shortid";

const Form = ({ todo, setTodo, todoList, setTodoList }) => {
    
    const handleChange = (event) => {
        setTodo(event.target.value);
    }

    const handleClick = (event) => {
        event.preventDefault();
        
        setTodoList([...todoList,{name: todo, id: shortid.generate()}]);
        setTodo("");
        console.log(todoList);
    }



    return (
        <div className={ styles.todoform}>
            <form>
                <input onChange={handleChange} value={todo} className={ styles.todoinput } type="text" placeholder="Add Todo Items" />
                <button onClick={handleClick} className={styles.todobutton}>Add</button>
            </form>
        </div>
    )
};

export default Form