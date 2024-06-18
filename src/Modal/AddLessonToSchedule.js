import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLesson } from "../reducers/studentsSlice";

function AddLessonToSchedule({ onClose }) {
    const students = useSelector((state) => state.students.students);
    
    const dispatch = useDispatch();

    const [lessonDate, setLessonDate] = useState(new Date());
    const [lessonTime, setLessonTime] = useState();
    const [lessonTitle, setLessonTitle] = useState('');
    const [idStudent, setIdStudent] = useState(students[0].id);

    const handleAddLesson = (e) => {
        e.preventDefault();
        const lesson = {id: Date.now(), date: lessonDate, time: lessonTime, title: lessonTitle, paid: false};
        console.log(lesson, idStudent);
        dispatch(addLesson({id:parseInt(idStudent), lesson}));
        alert('Урок добавлен');
    }
    return ( 
        <div className="add-lesso">
            <div className="add-lesson__header">
                <h2 className="add-lesson__title">Добавить урок</h2>
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
                    <select className="add-lesson__input" onChange={(e) => setIdStudent(e.target.value)}>
                        {students.map((student) => (
                            <option value={student.id}>{student.studentName}</option>
                        ))}
                    </select>
                    <div className="add-lesson__btn-box">
                        <button className="add-lesson__btn" onClick={onClose}>Назад</button>
                        <button className="add-lesson__btn" type='submit'>Добавить урок</button>
                        </div>
                </form>
                
                    
                
            </div>
        </div>
     );
}

export default AddLessonToSchedule;