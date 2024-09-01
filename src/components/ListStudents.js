import { Link } from "react-router-dom";
import Student from "./Student";
import { useSelector } from "react-redux";

function ListStudents() {
    const students = useSelector((state) => state.students.students);
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
                        <Link key={student.id} to={`/students/${student.id}`}>
                            <Student 
                            key={student.id}
                            name={student.studentName}
                            grade={student.grade}/>
                        </Link>
                    ))}
                </div>
                <div className="list-students__pagination"></div>
                <div className="list-students__btn btn">
                    <Link to={'/add-student'} className="list-students__add-btn btn">Добавить ученика</Link>
                </div>
            </div>
        </div>
     );
}

export default ListStudents;