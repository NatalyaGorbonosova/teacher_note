import Lesson from "./Lesson";

function Schedule() {
    const dateNow = new Date();
    const lessons = [{id: 1, title: 'Функция', paid: false, name: 'Лиза', time: '11:00'}, {id: 2, title: 'Функция', paid: true, name: 'Лиза 2', time: '12:00'}]
    
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
                        />
                    ))}
                </div>
                <div className="schedule__btn">
                    <button className="schedule__add-lesson">Добавить урок</button>
                </div>
            </div>
        </section>
     );
}

export default Schedule;