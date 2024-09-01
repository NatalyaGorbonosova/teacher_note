import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { editStudent } from "../reducers/studentsSlice";

function EditStudent({studentId, onClose}) {
    const students = useSelector((state) => state.students.students);
    const student = students.find((student) => student.id === studentId);
    
    const dispatch = useDispatch();

    const [nameStudent, setNameStudent] = useState(student.studentName);
    const [surname, setsurname] = useState(student.surname);
    const [phone, setPhone] = useState(student.phone);
    const [grade, setGrade] = useState(student.grade);
    const [goal, setGoal] = useState(student.goal);
    const [price, setPriace] = useState(student.price);
    const [parentName, setparentName] = useState(student.parentName);
    const [parentPhone, setParentPhone] = useState(student.parentPhone);
   
    const handleEditStudent = (e) => {
        e.preventDefault();
        const student = {id: studentId, studentName: nameStudent, surname, phone, grade, goal, price, parentName, parentPhone};
       
        if (student) {
            
            dispatch(editStudent(student))
            alert('Изменения внесены');
        }
    }
    return ( 
        <div className="edit-student">
           
            <div className='edit-student__header'>
                    <h2 className='edit-student__title'>Добавить ученика</h2>
                </div>
                <form onSubmit={handleEditStudent} className='edit-student__content'>
                    <div className='edit-student_student-info'>
                        <input className='edit-student__input'
                            key={'name'}
                            placeholder='Имя'
                            type='text'
                            required
                            value={nameStudent}
                            onChange={(e) => setNameStudent(e.target.value)}/>
                        <input className='edit-student__input'
                            key={'surname'}
                            placeholder='Фамилия'
                            type='text'
                            value={surname}
                            onChange={(e) => setsurname(e.target.value)}/>
                        <input className='edit-student__input'
                            key={'phone'}
                            placeholder='Телефон'
                            type='phone'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}/>
                        <input className='edit-student__input'
                            key={'grade'}
                            placeholder='Класс'
                            type='number'
                            required
                            value={grade}
                            onChange={(e) => setGrade(e.target.value)}/>
                        <input className='edit-student__input'
                            key={'goal'}
                            placeholder='Цель обучения'
                            type='text'
                            value={goal}
                            onChange={(e) => setGoal(e.target.value)}/>
                        <input className='edit-student__input'
                            key={'price'}
                            placeholder='Цена за урок'
                            type='number'
                            value={price}
                            required
                            onChange={(e) => setPriace(e.target.value)}/>

                    </div>
                    <div className='edit-student__parent'>
                        <h3 className='edit-student__subtitle'>Информация о родителях</h3>
                    <input className='edit-student__input'
                            key={'nameParent'}
                            placeholder='ФИО'
                            type='text'
                            required
                            value={parentName}
                            onChange={(e) => setparentName(e.target.value)}/>
                        <input className='edit-student__input'
                            key={'phoneParent'}
                            placeholder='Телефон'
                            type='number'
                            required
                            value={parentPhone}
                            onChange={(e) => setParentPhone(e.target.value)}/>
                    </div>
                    <div className='edit-student__btn-block'>
                        
                        <button className='edit-student__btn' onClick={onClose}>
                                Назад</button> 
                        
                        
                        <button className='edit-student__btn' type='submit'>Редактировать</button>
                    </div>
                </form>
            
            
        </div>
     );
}

export default EditStudent;