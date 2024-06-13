import { useState } from "react";
import Task from "./Task";

function ListTasks() {
    const dateNow = new Date();
    const tasks = [{id: 1, title: 'task1', complited: false}, {id: 2, title: 'task2', complited: true}]
    
    return ( 
        <section className="list-tasks">
            <div className="list-tasks__header">
                <h2 className="list-tasks__title">Список задач на {dateNow.toLocaleDateString([], )}</h2>
            </div>
            <div className="list-tasks__content">
                <div className="list-tasks__tasks">
                    {tasks.map((task) => 
                    (<Task 
                    key={task.id}
                    number={tasks.indexOf(task) + 1}
                    title={task.title}
                    complited={task.complited}/>))}
                </div>
                <div className="list-tasks_pagination"></div>
                <div className="list-tasks__btn">
                    <button className="list-tasks__add-task">Добавить задачу</button>
                </div>
            </div>
        </section>
     );
}

export default ListTasks;