import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLesson } from "../reducers/studentsSlice";


function AddLesson({ studentId, onClose }) {
    const students = useSelector((state) => state.students.students);
    const student = students.find((student) => student.id === studentId);
    
    const dispatch = useDispatch();
    const [lessonDate, setLessonDate] = useState(new Date());
    const [lessonTime, setLessonTime] = useState();
    const [lessonTitle, setLessonTitle] = useState('');

  
    
    const handleAddLesson = (e) => {
        e.preventDefault();
        const lesson = {id: Date.now(), date: lessonDate, time: lessonTime, title: lessonTitle, paid: false};
        
        dispatch(addLesson({id:studentId, lesson}));
        alert('Урок добавлен');
    }
    
    return ( 
        <div className="add-lesson">
            <div className="add-lesson__header">
                <h2 className="add-lesson__title">Добавить урок ученику {student.studentName}</h2>
            </div>
            <div className="add-lesson__content">
                <form className="add-lesson__lesson" onSubmit={handleAddLesson}>
                    <input className="add-lesson__input"
                        type="date"
                        required
                        key={'date'}
                        onChange={(e) => setLessonDate(e.target.value)}
                        placeholder="дата занятия"></input>
                    <input className="add-lesson__input"
                        required
                        key={'time'}
                        type="time"
                        onChange={(e) => setLessonTime(e.target.value)}
                        placeholder="время занятия"></input>
                    <input className="add-lesson__input"
                        type="text"
                        key={'lesson title'}
                        onChange={(e) => setLessonTitle(e.target.value)}></input>
                    <div className="add-lesson__btn-box">
                        <button className="add-lesson__btn btn" onClick={onClose}>Назад</button>
                        <button className="add-lesson__btn btn" type='submit'>Добавить урок</button>
                        </div>
                </form>
                
                    
                
            </div>
        </div>
     );
}

export default AddLesson;