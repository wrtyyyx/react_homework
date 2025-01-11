import React, {useEffect, useState} from 'react';
import './Form.css';
import Card from "../Card/Card.jsx";

const Form = () => {
    const [value, setValue] = useState('');
    const [todo, setTodo] = useState([]);

    const onSubmit = (event) => {
        event.preventDefault();
        putTodo(value);
        setValue('');
    };

    const putTodo = (value) => {
        if (value.trim().length !== 0) {
            setTodo([...todo, {text: value, done: false}]);
        } else {
            alert('Ty baran? napishi tasky');
        }
    };

    const deleteTodo = (index) => {
        const updateTodo = todo.filter((_, i) => i !== index) // still (_, i) from GPT
        setTodo(updateTodo)
    }
    const toggleDone = (index) => {
        const updateTodo = todo.map((item, i) => {
            return i === index ? {...item, done: !item.done} : item
        })
        setTodo(updateTodo)
        if (!todo[index].done){
            setTimeout(() => deleteTodo(index) , 3000)
        }
    }


    return (
        <div className={'container-fluid'}>
            <form id="form" onSubmit={onSubmit}>
                <div className="input d-flex justify-content-center border w-25 m-auto p-4 rounded mb-3 align-middle">
                    <label htmlFor={'task'}> Enter your task</label>
                    <input
                        name={'task'}
                        className={'rounded bg-transparent text-white'}
                        type="text"
                        placeholder="task..."
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                    />
                    <button type="submit" className="btn btn-success">
                        Add
                    </button>
                </div>
            </form>

            <div>
                {todo.length === 0 ? <div className={'text-center'}>Not task, add some...</div> : (
                    <div className={'todos row row-cols-1 row-cols-md-4 g-4 '}>
                        {todo.map((item, index) => (
                            <Card key={index} done={item.done} text={item.text} index={index} deleteTodo={deleteTodo}
                                  toggleDone={toggleDone}/>
                        ))}
                    </div>)}

            </div>
        </div>
    );
};

export default Form;
