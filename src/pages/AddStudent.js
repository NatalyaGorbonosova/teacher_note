import { Link } from 'react-router-dom';
import Header from '../components/Header'
function AddStudent() {
    return ( <div className='center'>
        <Header />
        <div className='add-student content'>
            <div className='add-student__block'>
                <div className='add-student__header'>
                    <h2 className='add-student__title'>Добавить ученика</h2>
                </div>
                <div className='add-student__content'>
                    <div className='add-student_student-info'>
                        <input className='add-student__input'
                            key={'name'}
                            placeholder='Имя'
                            type='text'
                            required/>
                        <input className='add-student__input'
                            key={'surname'}
                            placeholder='Фамилия'
                            type='text'/>
                        <input className='add-student__input'
                            key={'phone'}
                            placeholder='Телефон'
                            type='text'/>
                        <input className='add-student__input'
                            key={'grade'}
                            placeholder='Класс'
                            type='number'
                            required/>
                        <input className='add-student__input'
                            key={'goal'}
                            placeholder='Цель обучения'
                            type='text'/>
                        <input className='add-student__input'
                            key={'price'}
                            placeholder='Цена за урок'
                            type='number'
                            required/>

                    </div>
                    <div className='add-student__parent'>
                        <h3 className='add-student__subtitle'>Информация о родителях</h3>
                    <input className='add-student__input'
                            key={'nameParent'}
                            placeholder='ФИО'
                            type='text'
                            required/>
                        <input className='add-student__input'
                            key={'phoneParent'}
                            placeholder='Телефон'
                            type='number'
                            required/>
                    </div>
                    <div className='add-student__btn-block'>
                        <Link to={'/'}>
                            <button className='add-student__btn'>
                                Отмена</button> </Link>
                        <Link to={'/'}>
                        <button className='add-student__btn'>Добавить</button></Link>
                    </div>
                </div>
            </div>
        </div>
    </div> );
}

export default AddStudent;