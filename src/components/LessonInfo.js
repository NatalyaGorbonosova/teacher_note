import { useState } from "react";
import delete_icon from '../image/delete_icon.svg'
import { useDispatch } from "react-redux";
import { togglePaid } from "../reducers/studentsSlice";

function LessonInfo({id, lesson}) {
    const [paided, setPaided] = useState(lesson.paid);
    const dispatch = useDispatch();
    function dateToString(date) {
        const dateArray = date.split('-');
        const day = dateArray[2];
        const month = dateArray[1];
        const year = dateArray[0];

        return `${day}.${month}.${year}`;
    }
    const handleChangePaid = () => {
        dispatch(togglePaid({ idStudent: id, idLesson:lesson.id}))
    }
    return ( 
        <div className="lesson-info">
            <h3 className="lesson-info__subtitle">{dateToString(lesson.date) }</h3>
          {/*   <h3 className="lesson-info__subtitle">{lesson.time}</h3> */}
            <p className="lesson-info__text">{lesson.title}</p>
            <button onClick={() => handleChangePaid()} className="lesson-info__paid" style={{color: '#F1F6FF', background: lesson.paid ? '#48CE86' : '#F55D5D'}}>
                {lesson.paid ? 'Оплачен' : 'Не оплачен'}</button >
                <img src={delete_icon} className="lesson-info__icon"/>
            

        </div>
     );
}

export default LessonInfo;