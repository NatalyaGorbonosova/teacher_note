function Task({number, title, complited}) {
    
    return ( 
        <div className="task">
            <h4 className="task__number">{number}</h4>
            <h4 className="task__title">{title}</h4>
            <button className="task__complited"style={{color: '#F1F6FF', background: complited ? '#48CE86' : '#F55D5D'}}>{complited ? 'Выполнено' : 'Не выполнено'}</button>
        </div>
     );
}

export default Task;