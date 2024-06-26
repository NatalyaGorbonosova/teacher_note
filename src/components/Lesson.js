import { useDispatch } from "react-redux";
import { togglePaid } from "../reducers/studentsSlice";


function Lesson({time, name, title, paid, idStudent, idLesson}) {
    const dispatch = useDispatch();
    const handleChangePaid = () => {
        dispatch(togglePaid({idStudent, idLesson}));
    }
    return ( 
        <div className="lesson">
            <h3 className="lesson__time">{time}</h3>
            <h4 className="lesson__title">{name} {title}</h4>
            <button className="lesson__paid" onClick={() => handleChangePaid()} style={{color: '#F1F6FF', background: paid ? '#48CE86' : '#F55D5D'}}>{paid ? 'Оплачен' : 'Не оплачен'}</button>
        </div>
     );
}

export default Lesson;