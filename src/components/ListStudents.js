import { Link } from "react-router-dom";
import Student from "./Student";

function ListStudents() {
    const students = [{id: 1, name: 'Лиза', grade: 8}]
    return ( 
        <div className="list-students">
            <div className="list-students__header">
                <h2 className="list-students__title">
                    Список учеников
                </h2>
            </div>
            <div className="list-students__content">
                <div className="list-students__block-students">
                    {students.map(student => (
                        <Student 
                        key={student.id}
                        name={student.name}
                        grade={student.grade}/>
                    ))}
                </div>
                <div className="list-students__pagination"></div>
                <div className="list-students__btn">
                    <Link to={'/add-student'} className="list-students__add-btn">Добавить ученика</Link>
                </div>
                
            </div>
        </div>
     );
}

export default ListStudents;