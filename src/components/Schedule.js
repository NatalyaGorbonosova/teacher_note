import { useState } from "react";
import Lesson from "./Lesson";
import Modal from "react-modal";
import AddLessonToSchedule from "../Modal/AddLessonToSchedule";
import { useDispatch, useSelector } from "react-redux";
import { togglePaid } from "../reducers/studentsSlice";

function Schedule() {
    const students = useSelector((state) => state.students.students);
    const dispatch = useDispatch();
    const lessons = [];
    const dateNow = new Date();
    function getDayFromDateLesson(dateLesson) {
        return parseInt(dateLesson.split('-')[2])
    };
    function getMonthFromLesson(dateLesson) {
        const dateArray = dateLesson.split('-');
        return parseInt(dateArray[1]);
    };
    function getYearFromDateLesson(dateLesson) {
        return parseInt(dateLesson.split('-')[0])
    };
    const dayNow = dateNow.getDate();
    const monthNow = dateNow.getMonth() + 1;
    const yearNow = dateNow.getFullYear();


    students.forEach(student => {
        student.lessons.forEach(lesson => {
            if (getDayFromDateLesson(lesson.date) === dayNow && getMonthFromLesson(lesson.date) === monthNow && getYearFromDateLesson(lesson.date) === yearNow) {
                lessons.push({id: lesson.id, time: lesson.time, name: student.studentName, title: lesson.title, paid: lesson.paid, idStudent: student.id});
            }
           
           
        });
    });
    
    

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {
        setModalIsOpen(true);
    };
    const closeModal = () => {
        setModalIsOpen(false);
    };
    
    
    return ( 
        <section className="schedule">
            <div className="schedule__header">
                <h2 className="schedule__title">Расписание на {dateNow.toLocaleDateString([], )}</h2>
            </div>
            <div className="schedule__content">
                <div className="schedule__list">
                    {lessons.map((lesson) => (
                        <Lesson 
                        key={lesson.id}
                        time={lesson.time}
                        name={lesson.name}
                        title={lesson.title}
                        paid={lesson.paid}
                        idStudent={lesson.idStudent}
                        idLesson={lesson.id}
                        />
                    ))}
                </div>
                <div className="schedule__btn">
                    <button className="schedule__add-lesson" onClick={openModal}>Добавить урок</button>
                </div>
                <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                    <AddLessonToSchedule 
                     onClose={closeModal}/>
                </Modal>
            </div>
        </section>
     );
}

export default Schedule;