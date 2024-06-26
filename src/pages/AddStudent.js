import { Link } from 'react-router-dom';
import Header from '../components/Header'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addStudent } from '../reducers/studentsSlice';

function AddStudent() {
    const students = useSelector((state) => state.students.students);
    const dispatch = useDispatch();

    const [nameStudent, setNameStudent] = useState('');
    const [surname, setsurname] = useState('');
    const [phone, setPhone] = useState('');
    const [grade, setGrade] = useState('');
    const [goal, setGoal] = useState('');
    const [price, setPriace] = useState('');
    const [parentName, setparentName] = useState('');
    const [parentPhone, setParentPhone] = useState('');
   
    const handleAddStudent = (e) => {
        e.preventDefault();
        
        const student = {id: Date.now(), studentName: nameStudent, surname, phone, grade, goal, price, parentName, parentPhone, lessons: []};
       
        if (student) {
            
            dispatch(addStudent(student))
            alert('Ученик добавлен');
        }
        setGoal('');
        setGrade('');
        setNameStudent('');
        setParentPhone('');
        setPhone('');
        setPriace('');
        setparentName('');
        setsurname('');
        
    }
   
    return ( <div className='center'>
        <Header />
        <div className='add-student content'>
            <div className='add-student__block'>
                <div className='add-student__header'>
                    <h2 className='add-student__title'>Добавить ученика</h2>
                </div>
                <form onSubmit={handleAddStudent} className='add-student__content'>
                    <div className='add-student_student-info'>
                        <input className='add-student__input'
                            key={'name'}
                            placeholder='Имя'
                            type='text'
                            required
                            value={nameStudent}
                            onChange={(e) => setNameStudent(e.target.value)}/>
                        <input className='add-student__input'
                            key={'surname'}
                            placeholder='Фамилия'
                            type='text'
                            value={surname}
                            onChange={(e) => setsurname(e.target.value)}/>
                        <input className='add-student__input'
                            key={'phone'}
                            placeholder='Телефон'
                            type='phone'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}/>
                        <input className='add-student__input'
                            key={'grade'}
                            placeholder='Класс'
                            type='number'
                            required
                            value={grade}
                            onChange={(e) => setGrade(e.target.value)}/>
                        <input className='add-student__input'
                            key={'goal'}
                            placeholder='Цель обучения'
                            type='text'
                            value={goal}
                            onChange={(e) => setGoal(e.target.value)}/>
                        <input className='add-student__input'
                            key={'price'}
                            placeholder='Цена за урок'
                            type='number'
                            value={price}
                            required
                            onChange={(e) => setPriace(e.target.value)}/>

                    </div>
                    <div className='add-student__parent'>
                        <h3 className='add-student__subtitle'>Информация о родителях</h3>
                    <input className='add-student__input'
                            key={'nameParent'}
                            placeholder='ФИО'
                            type='text'
                            required
                            value={parentName}
                            onChange={(e) => setparentName(e.target.value)}/>
                        <input className='add-student__input'
                            key={'phoneParent'}
                            placeholder='Телефон'
                            type='number'
                            required
                            value={parentPhone}
                            onChange={(e) => setParentPhone(e.target.value)}/>
                    </div>
                    <div className='add-student__btn-block'>
                        <Link to={'/'}>
                            <button className='add-student__btn' >
                                Назад</button> 
                        </Link>
                        <button className='add-student__btn' type='submit'>Добавить</button>
                    </div>
                </form>
            </div>
        </div>
    </div> );
}

export default AddStudent;