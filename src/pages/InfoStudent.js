import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { useState } from "react";
import { useParams } from "react-router";
import phone_icon from '../image/phone_icon.svg';
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { removeStudent } from "../reducers/studentsSlice";
import EditStudent from "../Modal/EditStudent";
import AddLesson from "../Modal/AddLesson";
import LessonInfo from "../components/LessonInfo";


function InfoStudent() {
    const {id} = useParams();
    const students = useSelector((state) => state.students.students);
    const student = students.find((student) => student.id === parseInt(id));
    
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const dispatch = useDispatch();
    const openModal = () => {
        setModalIsOpen(true);
    };
    const closeModal = () => {
        setModalIsOpen(false);
    };
    const HandleRemoveStudent = (idStudent) => {
        dispatch(removeStudent({id: idStudent}));
        closeModal();
    }
    const [modalIsOpenEdit, setModalIsOpenEdit] = useState(false);
    const openModalEdit = () => {
        setModalIsOpenEdit(true);
    };
    const closeModalEdit = () => {
        setModalIsOpenEdit(false);
    };
    const [modalAddLesson, setModalAddLesson] = useState(false);
    const openModalAddLesson = () => {
        setModalAddLesson(true);
    }
    const closeModalAddLesson = () => {
        setModalAddLesson(false);
    }

   
    
    return ( 
    <div className="center">
        <Header />
        <div className="info-student ">
            <div className="info-student__left">
            <h2 className="info-student__title">Данные ученика</h2>
                <div className="info-student__data">
                <h3 className="info-student__subtitle">Имя: </h3>
                <p className="info-student__text">{student.studentName}</p>
                <h3 className="info-student__subtitle">Фамилия </h3>
                <p className="info-student__text">{student.surname }</p>
                <h3 className="info-student__subtitle"><img  src={phone_icon} /> Телефон</h3> 
                <p className="info-student__text">{student.phone}</p>
                <h3 className="info-student__subtitle">Класс </h3>
                <p className="info-student__text">{student.grade}</p>
                <h3 className="info-student__subtitle">Цель обучения: </h3>
                <p className="info-student__text">{student.goal}</p>
                <h3 className="info-student__subtitle">Цена одного занятия: </h3>
                <p className="info-student__text">{student.price}</p>
                </div>
                <h2 className="info-student__title">Данные родителей</h2>
                <div className="info-student__data">
                <h3 className="info-student__subtitle">ФИО </h3>
                <p className="info-student__text">{student.parentName }</p>
                <h3 className="info-student__subtitle"><img  src={phone_icon} /> Телефон</h3> 
                <p className="info-student__text">{student.parentPhone}</p>
                </div>
                <div className="info-student__btn-box">
                    <Link to={'/'}> <button className="info-student__btn">Главная</button> </Link>
                    <button className="info-student__btn" onClick={openModal}>Удалить</button>
                    <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                        <div className="modal">
                        <h2 className="modal__title">Удаление</h2>
                        <div className="modal__content">
                        <p className="modal__text">Удалить ученика {student.studentName} из списка?</p>
                        <div className="modal__btn-box">
                        <button className="modal__btn" onClick={closeModal}>Отмена</button>
                    <Link to={'/'}><button className="modal__btn" onClick={() => HandleRemoveStudent(student.id)}>Удалить</button>
                    </Link>
                    
                        </div>
                        </div>
                        
                    </div>
                    </Modal>
                    <button className="info-student__btn" onClick={openModalEdit}>Редактировать</button>
                    <Modal isOpen={modalIsOpenEdit} onRequestClose={closeModalEdit}>
                        <EditStudent studentId={parseInt(id)} onClose={closeModalEdit}/>
                    </Modal>
                </div>
            </div>
            <div className="info-student__right">
            <h2 className="info-student__title">Список уроков</h2>
            <ol>
                {student.lessons.map((lesson) => (
                    <li key={lesson.id}>
                        <LessonInfo
                            id={student.id}
                            lesson={lesson}/>
                    </li>
                ))}
            </ol>
            <button className="info-student__btn" onClick={openModalAddLesson}>Добавить урок</button>
            </div>
                <Modal 
                    isOpen={modalAddLesson}
                    onRequestClose={closeModalAddLesson}>
                       <AddLesson 
                        studentId ={parseInt(id)}
                        onClose={closeModalAddLesson}/>
                    </Modal>
            
        </div>
    
    </div> );
}

export default InfoStudent;