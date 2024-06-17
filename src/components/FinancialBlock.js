import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function FinancialBlock() {
    const students = useSelector((state) => state.students.students);
    const dateNow = new Date();
    const monthNow = dateNow.getMonth() + 1;
    const [totalSum, setTotalSum] = useState(0);
    const [totalDuty, setTotalDuty] = useState(0);

    function getMonthFromLesson(dateLesson) {
        const dateArray = dateLesson.split('-');
        return parseInt(dateArray[1]);
    }
    
    useEffect(() => {
        let total = 0;
        let duty = 0;
        students.forEach(student => {
            student.lessons.forEach(lesson => {
                
                if (lesson.paid && getMonthFromLesson(lesson.date) === monthNow) {
                    total = total + parseInt(student.price);
                }
                if (!lesson.paid && getMonthFromLesson(lesson.date) === monthNow) {
                    duty = duty + parseInt(student.price);
                }
            });
        });
        setTotalSum(total);
        setTotalDuty(duty);
    }, [])
       
    return ( 
        <section className="financial-block">
            <div className="financial-block__header">
                <h2 className="financial-block__title">Учет финансов</h2>
            </div>
            <div className="financial-block__content">
                <h3 className="financial-block__subtitle">Заработок за месяц</h3>
                <p className="financial-block__text_green">{totalSum}</p>
                <h3 className="financial-block__subtitle">Неоплаченные уроки</h3>
                <p className="financial-block__text_red">{totalDuty}</p>
            </div>
            
        </section>
     );
}

export default FinancialBlock;